from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from pymongo.errors import ConnectionFailure
from bson import ObjectId
from typing import List, Optional
import os
from dotenv import load_dotenv
from datetime import datetime
import uvicorn
from pydantic import BaseModel

# Load environment variables
load_dotenv()

app = FastAPI(title="Portfolio API", description="API for portfolio data", version="1.0.0")

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

# Global MongoDB client
mongodb_client = None
db = None

class Education(BaseModel):
    id: str
    name: str
    institution: str
    url: Optional[str] = None
    start: str
    end: Optional[str] = None
    expectedEnd: Optional[str] = None
    description: Optional[str] = None
    grade: Optional[str] = None
    createdAt: Optional[datetime] = None
    updatedAt: Optional[datetime] = None

@app.on_event("startup")
async def startup_db_client():
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

@app.on_event("shutdown")
async def shutdown_db_client():
    global mongodb_client
    if mongodb_client:
        mongodb_client.close()
        print("Disconnected from MongoDB")

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
    """Get all education records"""
    try:
        collection = db.education
        education_data = []
        
        for doc in collection.find().sort("createdAt", -1):  # Sort by newest first
            # Convert ObjectId to string
            doc["id"] = str(doc.pop("_id"))
            
            # Convert datetime objects to ISO format strings if they exist
            if "createdAt" in doc and doc["createdAt"]:
                doc["createdAt"] = doc["createdAt"].isoformat()
            if "updatedAt" in doc and doc["updatedAt"]:
                doc["updatedAt"] = doc["updatedAt"].isoformat()
            
            education_data.append(doc)
        
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

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
