const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
<<<<<<< HEAD
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/.+@.+\..+/, 'Please fill a valid email address']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [1000, 'Message cannot exceed 1000 characters']
  },
  status: {
    type: String,
    enum: ['new', 'read', 'replied'],
    default: 'new'
=======
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
>>>>>>> b6ec3f2f378b2d23489f84e442b29b7c613ca30a
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
<<<<<<< HEAD
}, {
  timestamps: true // Adds createdAt and updatedAt automatically
=======
>>>>>>> b6ec3f2f378b2d23489f84e442b29b7c613ca30a
});

module.exports = mongoose.model('Contact', contactSchema);
