const express = require('express');
const router = express.Router();
const { getProjects } = require('../controllers/projectController');
const auth = require('../middleware/auth');

router.get('/', auth, getProjects);

module.exports = router;