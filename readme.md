# 📝 Blog Platform API

A fully-featured RESTful API for a blog platform as a part of Round 2 Assignment from DekNek3D. It has features like user authentication, post management, comments, and likes. Built with **MVC architecture** using Node.js, Express, MongoDB, and JWT.

## 🚀 Live Demo

**Frontend:** [https://round2-assignment-frontend.onrender.com](https://round2-assignment-frontend.onrender.com)  
**Backend API:** [https://round2-assignment-backend.onrender.com](https://round2-assignment-backend.onrender.com)

---

## ✨ Features

### 👤 User Features

- User registration & login with JWT authentication
- View all blog posts (no login required)
- Create, edit, and delete own posts
- Like/unlike any post

- Comment on any post
- Delete own comments

### 🔒 Security

- Passwords hashed with bcryptjs
- JWT tokens for authentication
- Protected routes with middleware
- Ownership verification for edits/deletes
- Environment variables for sensitive data

### 📊 Database

- MongoDB with Mongoose ODM
- Relationships between Users, Posts, and Comments
- Population for nested data
- Virtual fields for comments

---

## 🛠️ Tech Stack

| Technology     | Purpose               |
| -------------- | --------------------- |
| **Node.js**    | Runtime environment   |
| **Express.js** | Web framework         |
| **MongoDB**    | Database              |
| **Mongoose**   | ODM for MongoDB       |
| **JWT**        | Authentication        |
| **bcryptjs**   | Password hashing      |
| **CORS**       | Cross-origin requests |
| **dotenv**     | Environment variables |

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- MongoDB (local or Atlas)

### One-Click Setup

```bash
# Clone repository
git clone https://github.com/Harsh-Kumar-Mishra2006/round2_assignment_backend.git

# Navigate to project
cd project-name

# Install dependencies
npm install

# Start development server
nodemon server.js
```

## 🔗 API Integration

These are the backend API endpoints configured in route files of _authRoutes.js_, _commentRoutes.js_, _postRoutes.js_ for these specific purposes as given in the table:

| Method     | Endpoint              | Purpose           |
| ---------- | --------------------- | ----------------- |
| **POST**   | /api/auth/signup      | User registration |
| **POST**   | /api/auth/login       | User login        |
| **GET**    | /api/auth/me          | Get current user  |
| **GET**    | /api/posts            | Get all posts     |
| **GET**    | /api/posts/:id        | Get single post   |
| **POST**   | /api/posts            | Create post       |
| **PUT**    | /api/posts/:id        | Update post       |
| **DELETE** | /api/posts/:id        | Delete post       |
| **PUT**    | /api/posts/:id/like   | Like/unlike post  |
| **GET**    | /api/comments/:postId | Get post comments |
| **POST**   | /api/comments         | Add comment       |
| **DELETE** | /api/comments/:id     | Delete comment    |

## :student: Author

**Harsh Kumar Mishra**
