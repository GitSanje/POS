require("dotenv").config();

const User = require("../models/User");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

// @desc Create new user
// @route POST /users
// @access Private





const createNewUser = asyncHandler(async (req, res) => {
  const { username, email, password, password_confirmation } = req.body;

  if (!username || !password || !email || !password_confirmation) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const duplicate = await User.findOne({ username }).lean().exec();

  if (duplicate) {
    return res.status(409).json({ message: "username already  exits" });
  }
  const emailDup = await User.findOne({ email: email });
  if (emailDup) {
    return res.status(409).json({ message: "email already  exits" });
  }

  if (password !== password_confirmation) {
    return res
      .status(409)
      .json({ message: `Password and Confirm Password doesn't match` });
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const userObject = { username, email, password: hashPassword };
  const UserModel = await User.create(userObject);
  if (UserModel) {
    //created

    const saved_user = await User.findOne({ email: email });

    const token = jwt.sign(
      { userID: saved_user._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "5d" }
    );
    res
      .status(201)
      .send({
        status: "success",
        message: "Registration Success",
        token: token,
      });
  } else {
    res.status(400).json({ message: "Invalid user data received" });
  }
});




const loginauth = asyncHandler(async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password ) {
        return res.status(400).json({ message: "All fields are required" });
      }

     const user = await User.findOne({ username }).lean().exec();
    if (!user) {
      return res.status(401).json({ error: "Authentication failed" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "password did not matched" });
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    res.status(200).json({ accessToken,refreshToken });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
});



const changeUserPassword = asyncHandler ( async (req, res) => {
    const { password, password_confirmation } = req.body
    if (!password || !password_confirmation) {

        res.status(400).json({  message: "All Fields are Required" })
    }


      if (password !== password_confirmation) {
        res.send({ "status": "failed", "message": "New Password and Confirm New Password doesn't match" })
      } else {
        const salt = await bcrypt.genSalt(10)
        const newHashPassword = await bcrypt.hash(password, salt)
        await User.findByIdAndUpdate(req.user._id, { $set: { password: newHashPassword } })
        res.send({ "status": "success", "message": "Password changed succesfully" })
      }
    
      
    
  }
)




const generateAccessToken = (user) => {
    return jwt.sign({ userID: user._id},  process.env.JWT_SECRET_KEY, {
      expiresIn: "30s",
    });
  };

const generateRefreshToken = (user) => {
    return jwt.sign({ userID: user._id },process.env.JWT_SECRET_KEY, {
        expiresIn: "5d",
    });
  };



module.exports = { createNewUser, loginauth,changeUserPassword };
