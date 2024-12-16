const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./Config/db'); // Ensure this path is correct
const vip2Routes = require('./Routes/Vip2Routes');
const vip3Routes = require('./Routes/Vip3Routes');
const vip4Routes = require('./Routes/Vip4Routes');
const vip5Routes = require('./Routes/Vip5Routes');
const vip6Routes = require('./Routes/Vip6Routes');

const accountDetailsRoute = require('./Routes/accountDetails');
const withdrawRoutes = require('./Routes/withdrawRoutes');
const paymentRoutes = require('./Routes/paymentRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to the database
connectDB();

// Define a simple route for the root path
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// Import routes
const authRoutes = require('./Routes/authRoutes'); // Ensure the path is correct

const taskRoutes = require('./Routes/taskRoutes');
app.use('/api/tasks', taskRoutes);
app.use('/api/vip2', vip2Routes);
app.use('/api/vip3', vip3Routes);
app.use('/api/vip4', vip4Routes);
app.use('/api/vip5', vip5Routes);
app.use('/api/vip6', vip6Routes);
app.use('/api', withdrawRoutes);

// Use routes
app.use('/api/auth', authRoutes); // Define a base path for auth routes
app.use('/api/payments', paymentRoutes);
app.use('/api/account-details', accountDetailsRoute);

app.delete('/api/withdraw/:id', async (req, res) => {
  const { id } = req.params;
  try {
    // Assuming you're using MongoDB
    await WithdrawRequest.findByIdAndDelete(id);
    res.status(200).send({ message: 'Request deleted successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Failed to delete request' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
