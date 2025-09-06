from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from pymongo.errors import ConnectionFailure
from bson import ObjectId
from typing import List
import os
from dotenv import load_dotenv
import uvicorn
from contextlib import asynccontextmanager

# Import local modules
from models import Education, WorkExperience
from common_methods import get_sorting_key_for_date

# Load environment variables
load_dotenv()

# Global MongoDB client
mongodb_client = None
db = None

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    global mongodb_client, db
    try:
        mongodb_client = MongoClient(MONGODB_URI)
        # Test the connection
        mongodb_client.admin.command('ping')
        db = mongodb_client[DATABASE_NAME]
        print(f"Connected to MongoDB at {MONGODB_URI}")
    except ConnectionFailure as e:
        print(f"Failed to connect to MongoDB: {e}")
        raise HTTPException(status_code=500, detail="Database connection failed")
    
    yield
    
    # Shutdown
    if mongodb_client:
        mongodb_client.close()
        print("Disconnected from MongoDB")

app = FastAPI(
    title="Portfolio API", 
    description="API for portfolio data", 
    version="1.0.0",
    lifespan=lifespan
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust this to your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB configuration
MONGODB_URI = os.getenv("MONGODB_URI", "mongodb://localhost:27017")
DATABASE_NAME = os.getenv("DATABASE_NAME", "portfolio")


@app.get("/")
async def root():
    return {"message": "Portfolio API is running"}


@app.get("/health")
async def health_check():
    try:
        # Test database connection
        db.command('ping')
        return {"status": "healthy", "database": "connected"}
    except Exception as e:
        raise HTTPException(status_code=503, detail=f"Database connection failed: {str(e)}")


@app.get("/education", response_model=List[Education])
async def get_education():
    """Get all education records ordered by end date (most recent first)"""
    try:
        collection = db.education
        education_data = []
        
        # Fetch all documents first
        for doc in collection.find():
            # Convert ObjectId to string
            doc["id"] = str(doc.pop("_id"))
            
            # Convert datetime objects to ISO format strings if they exist
            if "createdAt" in doc and doc["createdAt"]:
                doc["createdAt"] = doc["createdAt"].isoformat()
            if "updatedAt" in doc and doc["updatedAt"]:
                doc["updatedAt"] = doc["updatedAt"].isoformat()
            
            education_data.append(doc)
        
        # Custom sorting function
        def parse_date_for_sorting(education_item):
            """Parse education dates for sorting. Returns a tuple for comparison."""
            # Determine which date to use and if it's current
            end_date = education_item.get("end")
            expected_end = education_item.get("expectedEnd")
            start_date = education_item.get("start", "")
            
            # If there's an end date, use it (completed education)
            if end_date and end_date != "null":
                return get_sorting_key_for_date(end_date, is_current=False)
            # If no end date but there's an expected end, use that (current education)
            elif expected_end and expected_end != "null":
                return get_sorting_key_for_date(expected_end, is_current=True)
            # If neither, use start date
            else:
                return get_sorting_key_for_date(start_date, is_current=False)
        
        # Sort education data by date (most recent first)
        education_data.sort(key=parse_date_for_sorting)
        
        return education_data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch education data: {str(e)}")


@app.get("/education/{education_id}", response_model=Education)
async def get_education_by_id(education_id: str):
    """Get a specific education record by ID"""
    try:
        if not ObjectId.is_valid(education_id):
            raise HTTPException(status_code=400, detail="Invalid education ID format")
        
        collection = db.education
        doc = collection.find_one({"_id": ObjectId(education_id)})
        
        if not doc:
            raise HTTPException(status_code=404, detail="Education record not found")
        
        # Convert ObjectId to string
        doc["id"] = str(doc.pop("_id"))
        
        # Convert datetime objects to ISO format strings if they exist
        if "createdAt" in doc and doc["createdAt"]:
            doc["createdAt"] = doc["createdAt"].isoformat()
        if "updatedAt" in doc and doc["updatedAt"]:
            doc["updatedAt"] = doc["updatedAt"].isoformat()
        
        return doc
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch education data: {str(e)}")


@app.get("/work-experience", response_model=List[WorkExperience])
async def get_work_experience():
    """Get all work experience records ordered by end date (most recent first)"""
    try:
        collection = db.work_experience
        work_data = []
        
        # Fetch all documents first
        for doc in collection.find():
            # Convert ObjectId to string
            doc["id"] = str(doc.pop("_id"))
            
            # Convert datetime objects to ISO format strings if they exist
            if "createdAt" in doc and doc["createdAt"]:
                doc["createdAt"] = doc["createdAt"].isoformat()
            if "updatedAt" in doc and doc["updatedAt"]:
                doc["updatedAt"] = doc["updatedAt"].isoformat()
            
            work_data.append(doc)
        
        # Custom sorting function for work experience
        def parse_work_date_for_sorting(work_item):
            """Parse work experience dates for sorting. Returns a tuple for comparison."""
            positions = work_item.get("positions", [])
            if not positions:
                return (0, 0)  # If no positions, put at end
            
            # Find the most recent end date among all positions
            best_sorting_key = (0, 0)
            
            for position in positions:
                end_date = position.get("end")
                start_date = position.get("start", "")
                
                # Check if this is a current position (no end date)
                is_current = not end_date or end_date in [None, "null", ""]
                
                if is_current:
                    # Current position gets maximum priority
                    current_key = get_sorting_key_for_date(start_date, is_current=True)
                    if current_key < best_sorting_key or best_sorting_key == (0, 0):
                        best_sorting_key = current_key
                else:
                    # Completed position
                    end_key = get_sorting_key_for_date(end_date, is_current=False)
                    if end_key < best_sorting_key or best_sorting_key == (0, 0):
                        best_sorting_key = end_key
            
            return best_sorting_key
        
        # Sort work experience data by date (most recent first)
        work_data.sort(key=parse_work_date_for_sorting)
        
        return work_data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch work experience data: {str(e)}")


@app.get("/work-experience/{work_id}", response_model=WorkExperience)
async def get_work_experience_by_id(work_id: str):
    """Get a specific work experience record by ID"""
    try:
        if not ObjectId.is_valid(work_id):
            raise HTTPException(status_code=400, detail="Invalid work experience ID format")
        
        collection = db.work_experience
        doc = collection.find_one({"_id": ObjectId(work_id)})
        
        if not doc:
            raise HTTPException(status_code=404, detail="Work experience record not found")
        
        # Convert ObjectId to string
        doc["id"] = str(doc.pop("_id"))
        
        # Convert datetime objects to ISO format strings if they exist
        if "createdAt" in doc and doc["createdAt"]:
            doc["createdAt"] = doc["createdAt"].isoformat()
        if "updatedAt" in doc and doc["updatedAt"]:
            doc["updatedAt"] = doc["updatedAt"].isoformat()
        
        return doc
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch work experience data: {str(e)}")


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
