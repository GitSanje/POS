const express = require('express');
const verifyToken = require('../middleware/authMiddleware');
const { changeUserPassword, checkAuth } = require('../controllers/usersController');

 const router = express.Router();
 

// ROute Level Middleware - To Protect Route
//  router.use(verifyToken);

 router.get('/profile', verifyToken, (req, res) => {
    res.json({user: req.user})
 })
 // Protected Routes
 router.post('/changepassword', changeUserPassword);


   
module.exports = router;