const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
require('dotenv').config();

// Import routes
const ordersRoutes = require('./routes/orders');
// const authRoutes = require('./routes/auth');
// const programRoutes = require('./routes/programs');
// const courseRoutes = require('./routes/courses');
// const contactRoutes = require('./routes/contact');

// Import middleware
// const errorHandler = require('./middleware/errorHandler');

const app = express();

// Security middleware
app.use(helmet());

// CORS configuration
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Compression middleware
app.use(compression());

// Logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Code Kids PK API is running!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// API routes
app.use('/api/orders', ordersRoutes);
// app.use('/api/auth', authRoutes);
// app.use('/api/programs', programRoutes);
// app.use('/api/courses', courseRoutes);
// app.use('/api/contact', contactRoutes);

// Welcome route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Code Kids PK API',
    version: '1.0.0',
    docs: '/api/health'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Global error handler
// app.use(errorHandler);

module.exports = app;
