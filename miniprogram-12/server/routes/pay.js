const express = require('express');
const router = express.Router();
const { createPayment } = require('../controllers/payController');
const auth = require('../middleware/auth');

router.post('/', auth, createPayment);

module.exports = router;