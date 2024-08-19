const express = require('express');
const verifyToken = require('../middleware/authMiddleware');
const { changeUserPassword } = require('../controllers/usersController');

 const router = express.Router();
 

// ROute Level Middleware - To Protect Route
 router.use('/verify', verifyToken);


 // Protected Routes
 router.post('/changepassword', changeUserPassword);


   
module.exports = router;