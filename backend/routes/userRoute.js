const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();


// Route for user registration
router.post('/register', usersController.createNewUser);

// Route for user login
router.post('/login', usersController.loginauth);

module.exports = router;