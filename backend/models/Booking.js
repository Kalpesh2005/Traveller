const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// MongoDB URI
const MONGO_URI = 'mongodb+srv://22amtics452:FS964yY6pi6AVUo2@cluster2.efkln.mongodb.net/travelDB?retryWrites=true&w=majority';

// Initialize Express App
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Define Booking Schema
const bookingSchema = new mongoose.Schema({
  packageName: String,
  packagePrice: String,
  name: String,
  email: String,
  phone: String,
  date: String,
  people: Number,
});

const Booking = mongoose.model('Booking', bookingSchema);

// API endpoint to handle booking submissions
app.post('/api/bookings', async (req, res) => {
  const bookingData = req.body;

  try {
    const newBooking = new Booking(bookingData);
    await newBooking.save();
    res.status(201).json({ message: 'Booking submitted successfully!' });
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ message: 'Error saving booking' });
  }
});

// Start the server
const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
