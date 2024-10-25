const Payment = require('../models/Payment');

exports.createPayment = async (req, res) => {
  try {
    const payment = new Payment({ ...req.body, userId: req.user._id });
    await payment.save();
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};