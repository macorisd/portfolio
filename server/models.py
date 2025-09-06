from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime


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


class Position(BaseModel):
    title: str
    start: str
    end: Optional[str] = None
    description: Optional[str] = None
    tech: Optional[List[str]] = []


class WorkExperience(BaseModel):
    id: str
    company: str
    url: Optional[str] = None
    positions: List[Position] = []
    createdAt: Optional[datetime] = None
    updatedAt: Optional[datetime] = None
