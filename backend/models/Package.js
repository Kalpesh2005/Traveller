const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  name: String,
  duration: String,
  food: String,
  residence: String,
  tourPlans: [String],
  price: String,
});

module.exports = mongoose.model('Package', packageSchema);
