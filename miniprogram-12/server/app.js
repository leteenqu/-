const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Database connected');
    app.listen(3000, () => console.log('Server running on port 3000'));
  } catch (error) {
    console.error('Connection error', error);
  }
};

startServer();