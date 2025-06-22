const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize Express App
const app = express();
const port = process.env.PORT || 5000;

// ✅ CORS Configuration — allow multiple frontend URLs
const allowedOrigins = [
  'https://traveller-mei150qr9-kalpesh-patils-projects-5e82ed60.vercel.app',
  'https://traveller-git-main-kalpesh-patils-projects-5e82ed60.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Middleware
app.use(bodyParser.json());

// MongoDB URI
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://22amtics452:FS964yY6pi6AVUo2@cluster2.efkln.mongodb.net/travelDB?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// SCHEMAS
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const bookingSchema = new mongoose.Schema({
  packageName: String,
  packagePrice: String,
  name: String,
  email: String,
  phone: String,
  date: String,
  people: Number,
});

const orderSchema = new mongoose.Schema({
  product: {
    id: Number,
    name: String,
    description: String,
    price: Number,
    image: String,
  },
  quantity: Number,
  totalPrice: Number,
  createdAt: { type: Date, default: Date.now },
});

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
});

// MODELS
const User = mongoose.model('User', userSchema);
const Booking = mongoose.model('Booking', bookingSchema);
const Order = mongoose.model('Order', orderSchema);
const Contact = mongoose.model('Contact', contactSchema);

// ROUTES

app.get('/', (req, res) => {
  res.send('Server is running');
});

// REGISTER
app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// LOGIN
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// TOKEN VERIFICATION MIDDLEWARE
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access denied, no token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

// BOOKING
app.post('/api/bookings', async (req, res) => {
  const bookingData = req.body;
  if (!bookingData.packageName || !bookingData.packagePrice || !bookingData.name || !bookingData.email || !bookingData.phone || !bookingData.date || !bookingData.people) {
    return res.status(400).json({ message: 'Missing required booking fields' });
  }

  try {
    const newBooking = new Booking(bookingData);
    await newBooking.save();
    res.status(201).json({ message: 'Booking submitted successfully!', booking: newBooking });
  } catch (error) {
    res.status(500).json({ message: 'Error saving booking', error: error.message });
  }
});

// BUY NOW ORDER
app.post('/api/orders/buy', async (req, res) => {
  const { product, quantity, totalPrice } = req.body;
  if (!product || !quantity || !totalPrice) {
    return res.status(400).json({ message: 'Missing required order fields' });
  }

  try {
    const newOrder = new Order({ product, quantity, totalPrice });
    await newOrder.save();
    res.status(200).json({ message: 'Purchase successful', order: newOrder });
  } catch (error) {
    res.status(500).json({ message: 'Server error during purchase', error: error.message });
  }
});

// CONTACT FORM
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required contact fields' });
  }

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(200).json({ message: 'Contact form submitted successfully', contact: newContact });
  } catch (error) {
    res.status(500).json({ message: 'Server error during contact submission', error: error.message });
  }
});

// START SERVER
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
