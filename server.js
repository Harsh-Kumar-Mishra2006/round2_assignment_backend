const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

// Loading env
dotenv.config();

// Connecting to database
connectDB();

// Route files
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');

const app = express();

// Body parser
app.use(express.json());

// CORS for frontend integration
const allowedOrigins = [
  'https://round2-assignment-frontend.onrender.com',
  'http://localhost:5173', 
  'http://localhost:3000'   
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

// Home route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Blog Platform API is running successfully',
    version: '1.0.0',
    frontend: 'https://round2-assignment-frontend.onrender.com',
    endpoints: {
      auth: '/api/auth',
      posts: '/api/posts',
      comments: '/api/comments'
    }
  });
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`
   Server running on port ${PORT}
   Environment: ${process.env.NODE_ENV}
   Local: http://localhost:${PORT}
   Frontend: https://round2-assignment-frontend.onrender.com
  `);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(` Error: ${err.message}`);
  server.close(() => process.exit(1));
});