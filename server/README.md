# Portfolio Backend Server

FastAPI backend server for the portfolio application that connects to MongoDB.

## Setup

1. Install Python dependencies:
```bash
pip install -r requirements.txt
```

2. Create a `.env` file based on `.env.example` and configure your MongoDB connection:
```bash
cp .env.example .env
```

3. Edit `.env` with your MongoDB URI and database name:
```
MONGODB_URI=your_mongodb_connection_string
DATABASE_NAME=your_database_name
```

## Running the Server

Start the development server:
```bash
python main.py
```

Or using uvicorn directly:
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at:
- Main API: http://localhost:8000
- Interactive API docs: http://localhost:8000/docs
- ReDoc documentation: http://localhost:8000/redoc

## API Endpoints

- `GET /` - Root endpoint
- `GET /health` - Health check endpoint
- `GET /education` - Get all education records
- `GET /education/{education_id}` - Get specific education record by ID

## Database Schema

### Education Collection

The education collection should contain documents with the following structure:

```json
{
  "_id": "ObjectId",
  "name": "Software Engineering Bachelor's Degree",
  "institution": "Universidad de Málaga",
  "url": "https://www.uma.es/grado-en-ingenieria-del-software",
  "start": "Sep 2021",
  "end": null,
  "expectedEnd": "Jun 2025",
  "description": "Description of the education...",
  "grade": "8.69/10",
  "createdAt": "ISODate",
  "updatedAt": "ISODate"
}
```
