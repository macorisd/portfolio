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


class Author(BaseModel):
    name: str
    url: Optional[str] = None


class Venue(BaseModel):
    name: str
    url: Optional[str] = None


class Group(BaseModel):
    name: str
    url: Optional[str] = None


class CustomButton(BaseModel):
    text: str
    color: str
    url: str


class Paper(BaseModel):
    id: str
    title: str
    date: str
    venue: Venue
    authors: List[Author] = []
    group: Optional[Group] = None
    abstract: str
    pdfUrl: str
    customButtons: Optional[List[CustomButton]] = []
    createdAt: Optional[datetime] = None
    updatedAt: Optional[datetime] = None


class Certification(BaseModel):
    id: str
    name: str
    date: str
    issuer: str
    url: Optional[str] = None
    featured: bool = False
    importance: int = 1
    fields: List[str] = []
    createdAt: Optional[datetime] = None
    updatedAt: Optional[datetime] = None


class Award(BaseModel):
    id: str
    title: str
    type: str
    date: str
    entity: str
    url: Optional[str] = None
    description: Optional[str] = None
    image: Optional[str] = None
    createdAt: Optional[datetime] = None
    updatedAt: Optional[datetime] = None
