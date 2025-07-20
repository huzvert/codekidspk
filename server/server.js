const app = require('./app');
const mongoose = require('mongoose');

// Load environment variables
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/codekids';

// Connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI, {
      // Remove deprecated options that are no longer needed in Mongoose 6+
    });

    console.log(`📦 MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    process.exit(1);
  }
};

// Handle database connection events
mongoose.connection.on('disconnected', () => {
  console.log('📦 MongoDB disconnected');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err);
});

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Received SIGINT. Graceful shutdown...');

  try {
    await mongoose.connection.close();
    console.log('📦 MongoDB connection closed');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error during shutdown:', error);
    process.exit(1);
  }
});

// Start server
const startServer = async () => {
  try {
    // Connect to database
    await connectDB();

    // Start Express server
    const server = app.listen(PORT, () => {
      console.log('🚀 Code Kids PK Backend Server Started!');
      console.log(`📍 Server running on: http://localhost:${PORT}`);
      console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
      console.log('➡️  Press Ctrl+C to stop the server');
    });

    // Handle server errors
    server.on('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        console.error(`❌ Port ${PORT} is already in use`);
      } else {
        console.error('❌ Server error:', error);
      }
      process.exit(1);
    });

  } catch (error) {
    console.error('❌ Failed to start server:', error.message);
    process.exit(1);
  }
};

// Start the server
startServer();
