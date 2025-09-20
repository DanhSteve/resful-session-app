const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const authRoutes = require('./routes/auth');
const MongoStore = require('connect-mongo');
const cookieParser = require('cookie-parser');
const app = express();


app.use(express.json());
app.use(cookieParser());


app.use(session({
  secret: 'mysecretkey', 
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: 'mongodb://localhost:27017/sessionAuth',
    collectionName: 'sessions'
  }),
  cookie: {
    httpOnly: true, 
    secure: false,  
    maxAge: 1000 * 60 * 60, 
    sameSite: 'lax' 
  }
}));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/sessionAuth', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/auth', authRoutes);
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Auth API!');
});

module.exports = app;
