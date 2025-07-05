// // -------------------- Dependencies --------------------
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv');

// // -------------------- Load Env --------------------
// dotenv.config();

// // -------------------- Express App --------------------
// const app = express();
// const port = process.env.PORT || 5000;

// // -------------------- CORS Setup --------------------
// const allowedOrigins = [
//   'http://localhost:3000',
//   'https://traveller-self.vercel.app',
//   'https://traveller-git-main-kalpesh-patils-projects-5e82ed60.vercel.app'
// ];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       console.warn(`❌ Blocked by CORS: ${origin}`);
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true
// };

// app.use(cors(corsOptions));
// app.options('*', cors(corsOptions)); // Handle preflight

// // -------------------- Middleware --------------------
// app.use(express.json());
// app.use(bodyParser.json());

// // -------------------- MongoDB Connection --------------------
// const MONGO_URI = process.env.MONGO_URI;
// if (!MONGO_URI) {
//   console.error('❌ MONGO_URI not set in .env');
//   process.exit(1);
// }

// mongoose.connect(MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => console.log('✅ MongoDB Connected'))
//   .catch((err) => console.error('❌ MongoDB connection error:', err));

// // -------------------- Request Logger --------------------
// app.use((req, res, next) => {
//   console.log(`🔁 ${req.method} ${req.path} from ${req.headers.origin || 'unknown origin'}`);
//   next();
// });

// // -------------------- Schemas & Models --------------------
// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now }
// });

// const bookingSchema = new mongoose.Schema({
//   packageName: String,
//   packagePrice: String,
//   name: String,
//   email: String,
//   phone: String,
//   date: String,
//   people: Number
// });

// const orderSchema = new mongoose.Schema({
//   product: {
//     id: Number,
//     name: String,
//     description: String,
//     price: Number,
//     image: String
//   },
//   quantity: Number,
//   totalPrice: Number,
//   createdAt: { type: Date, default: Date.now }
// });

// const contactSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   message: { type: String, required: true },
//   submittedAt: { type: Date, default: Date.now }
// });

// const User = mongoose.model('User', userSchema);
// const Booking = mongoose.model('Booking', bookingSchema);
// const Order = mongoose.model('Order', orderSchema);
// const Contact = mongoose.model('Contact', contactSchema);

// // -------------------- Routes --------------------
// app.get('/', (req, res) => {
//   res.send('✅ Server is running');
// });

// // --- Register ---
// app.post('/api/register', async (req, res) => {
//   const { username, email, password } = req.body;

//   if (!username || !email || !password) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ message: 'User already exists' });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ username, email, password: hashedPassword });
//     await newUser.save();
//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// });

// // --- Login ---
// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) return res.status(400).json({ message: 'Email and password are required' });

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: 'User not found' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token, message: 'Login successful' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// });

// // --- Token Middleware ---
// const verifyToken = (req, res, next) => {
//   const token = req.header('Authorization');
//   if (!token) return res.status(401).json({ message: 'Access denied, no token provided' });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(400).json({ message: 'Invalid token' });
//   }
// };

// // --- Bookings ---
// app.post('/api/bookings', async (req, res) => {
//   const { packageName, packagePrice, name, email, phone, date, people } = req.body;

//   if (!packageName || !packagePrice || !name || !email || !phone || !date || !people) {
//     return res.status(400).json({ message: 'Missing required booking fields' });
//   }

//   try {
//     const booking = new Booking(req.body);
//     await booking.save();
//     res.status(201).json({ message: 'Booking submitted successfully!', booking });
//   } catch (error) {
//     res.status(500).json({ message: 'Error saving booking', error: error.message });
//   }
// });

// // --- Orders ---
// app.post('/api/orders/buy', async (req, res) => {
//   const { product, quantity, totalPrice } = req.body;

//   if (!product || !quantity || !totalPrice) {
//     return res.status(400).json({ message: 'Missing required order fields' });
//   }

//   try {
//     const order = new Order({ product, quantity, totalPrice });
//     await order.save();
//     res.status(200).json({ message: 'Purchase successful', order });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error during purchase', error: error.message });
//   }
// });

// // --- Contact ---
// app.post('/api/contact', async (req, res) => {
//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ message: 'Missing required contact fields' });
//   }

//   try {
//     const contact = new Contact({ name, email, message });
//     await contact.save();
//     res.status(200).json({ message: 'Contact form submitted successfully', contact });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error during contact submission', error: error.message });
//   }
// });

// // -------------------- Start Server --------------------
// app.listen(port, '0.0.0.0', () => {
//   console.log(`🚀 Server running on http://0.0.0.0:${port}`);
// });



// -------------------- Dependencies --------------------
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// -------------------- Load Env --------------------
dotenv.config();

// -------------------- Express App --------------------
const app = express();
const port = process.env.PORT || 5000;

// -------------------- CORS Setup --------------------
const allowedOrigins = [
  'http://localhost:3000',
  'https://traveller-self.vercel.app',
  'https://traveller-git-main-kalpesh-patils-projects-5e82ed60.vercel.app'
];

const corsOptions = {
  origin: function (origin, callback) {
    console.log('🌐 Incoming origin:', origin);
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn(`❌ Blocked by CORS: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight

// -------------------- Middleware --------------------
app.use(express.json()); // ✅ Do not use bodyParser.json()

// -------------------- MongoDB Connection --------------------
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error('❌ MONGO_URI not set in .env');
  process.exit(1);
}

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// -------------------- Request Logger --------------------
app.use((req, res, next) => {
  console.log(`🔁 ${req.method} ${req.path} from ${req.headers.origin || 'unknown origin'}`);
  next();
});

// -------------------- Schemas & Models --------------------
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const bookingSchema = new mongoose.Schema({
  packageName: String,
  packagePrice: String,
  name: String,
  email: String,
  phone: String,
  date: String,
  people: Number
});

const orderSchema = new mongoose.Schema({
  product: {
    id: Number,
    name: String,
    description: String,
    price: Number,
    image: String
  },
  quantity: Number,
  totalPrice: Number,
  createdAt: { type: Date, default: Date.now }
});

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
const Booking = mongoose.model('Booking', bookingSchema);
const Order = mongoose.model('Order', orderSchema);
const Contact = mongoose.model('Contact', contactSchema);

// -------------------- Routes --------------------
app.get('/', (req, res) => {
  res.send('✅ Server is running');
});

// --- Register ---
app.post('/api/register', async (req, res) => {
  console.log('📥 Register Request Body:', req.body); // ✅ Log incoming data

  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('❌ Error in registration:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// --- Login ---
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ message: 'Email and password are required' });

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, message: 'Login successful' });
  } catch (error) {
    console.error('❌ Error during login:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// --- Token Middleware ---
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

// --- Bookings ---
app.post('/api/bookings', async (req, res) => {
  const { packageName, packagePrice, name, email, phone, date, people } = req.body;

  if (!packageName || !packagePrice || !name || !email || !phone || !date || !people) {
    return res.status(400).json({ message: 'Missing required booking fields' });
  }

  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: 'Booking submitted successfully!', booking });
  } catch (error) {
    res.status(500).json({ message: 'Error saving booking', error: error.message });
  }
});

// --- Orders ---
app.post('/api/orders/buy', async (req, res) => {
  const { product, quantity, totalPrice } = req.body;

  if (!product || !quantity || !totalPrice) {
    return res.status(400).json({ message: 'Missing required order fields' });
  }

  try {
    const order = new Order({ product, quantity, totalPrice });
    await order.save();
    res.status(200).json({ message: 'Purchase successful', order });
  } catch (error) {
    res.status(500).json({ message: 'Server error during purchase', error: error.message });
  }
});

// --- Contact ---
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required contact fields' });
  }

  try {
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(200).json({ message: 'Contact form submitted successfully', contact });
  } catch (error) {
    res.status(500).json({ message: 'Server error during contact submission', error: error.message });
  }
});

// -------------------- Start Server --------------------
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://0.0.0.0:${port}`);
});
