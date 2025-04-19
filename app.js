const express = require('express');
// const path = require('path');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const passport = require('passport');
// const connectDB = require('./config/db');
// const corsOptions = require('./config/cors');
// const errorHandler = require('./middlewares/errorMiddleware');
// require('./config/passport');

// Route files
// const authRoutes = require('./routes/authRoutes');
// const meetingRoutes = require('./routes/meetingRoutes');
// const aiRoutes = require('./routes/aiRoutes');

// Connect to database
// connectDB();

// Initialize express app
const app = express();

// Enable CORS
// app.use(cors(corsOptions));

// // Body parser
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Cookie parser
// app.use(cookieParser());

// // Passport middleware
// app.use(passport.initialize());

// // Mount routers
// app.use('/api/auth', authRoutes);
// app.use('/api/meetings', meetingRoutes);
// app.use('/api/ai', aiRoutes);

// Error handler middleware
// app.use(errorHandler);

module.exports = app;