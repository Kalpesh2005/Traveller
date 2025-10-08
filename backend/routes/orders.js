
const express = require('express');
const router = express.Router();
const Order = require('../models/Order'); // Assuming you have an Order model

// Route to handle the purchase of a product
router.post('/buy', async (req, res) => {
  const { product, quantity, totalPrice, userId } = req.body; // You can pass userId for authenticated users

  try {
    const newOrder = new Order({
      product: product.name,
      quantity,
      totalPrice,
      userId,
      purchaseDate: new Date(),
    });

    await newOrder.save();
    res.status(200).json({ message: 'Purchase successful!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process order' });
  }
});

module.exports = router;
