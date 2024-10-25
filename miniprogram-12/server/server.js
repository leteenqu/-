const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const jobRoutes = require('./routes/jobs');
const projectRoutes = require('./routes/projects');
const paymentRoutes = require('./routes/payments');

require('dotenv').config();

const app = express();
app.use(express.json());

connectDB();

app.use('/auth', authRoutes);
app.use('/jobs', jobRoutes);
app.use('/projects', projectRoutes);
app.use('/pay', paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});