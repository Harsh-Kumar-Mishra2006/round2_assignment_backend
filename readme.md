# 📝 Blog Platform API

A fully-featured RESTful API for a blog platform with user authentication, post management, comments, and likes. Built with **MVC architecture** using Node.js, Express, MongoDB, and JWT.


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

| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime environment |
| **Express.js** | Web framework |
| **MongoDB** | Database |
| **Mongoose** | ODM for MongoDB |
| **JWT** | Authentication |
| **bcryptjs** | Password hashing |
| **CORS** | Cross-origin requests |
| **dotenv** | Environment variables |

---

