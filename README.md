# StartupAdda (Server)

A scalable backend API for the StartupAdda platform. It handles startup idea management, user interactions, authentication support, comments system, and data persistence using MongoDB.

---

## Overview

This server is built using Node.js and Express.js and provides a RESTful API for the StartupAdda frontend application. It manages startup ideas, user comments, and related data operations with MongoDB as the database.

---

## Tech Stack

- Node.js
- Express.js
- MongoDB (Native Driver / Mongoose optional)
- REST API Architecture
- CORS Middleware
- Dotenv for environment configuration

---

## Features

### Ideas Management

- Create startup ideas
- Fetch all ideas
- Update idea details
- Delete ideas
- Filter support (search, category, sort)

### Comments System

- Add comments to ideas
- Edit comments
- Delete comments
- Fetch comments by idea

### Data Handling

- Secure API endpoints
- Efficient MongoDB queries
- JSON-based request/response handling

---

## API Endpoints

### Ideas

- GET `/ideas`  
  Fetch all startup ideas

- POST `/ideas`  
  Create a new idea

- PATCH `/ideas/:id`  
  Update an existing idea

- DELETE `/ideas/:id`  
  Delete an idea

---

### Comments

- GET `/comments/:ideaId`  
  Get all comments for a specific idea

- POST `/comments`  
  Add a new comment

- PATCH `/comments/:commentId`  
  Update a comment

- DELETE `/comments/:commentId`  
  Delete a comment

---

## Query Parameters (Ideas Filtering)

Example:
/ideas?search=ai&category=FinTech&sort=desc

### Supported filters:

- `search` → keyword search in title/description
- `category` → filter by category
- `sort` → asc | desc based on created date

---
