require("dotenv").config();

const User = require("../models/User");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const cookieOptions = require("../config/cookieOptions");

const getAllUsers = asyncHandler( async ( req, res) => {
  try {
     const users = await User.find({}).lean().exec()
  
     if(!users || users.length ===0){
      res.status(401).json({message: "No users found"})
     }
     res.status(200).json({users: users})
  
  } catch (error) {
    res.status(500).json({ message: "An error occurred while fetching users" });
  }

})

const checkAuth = asyncHandler( async ( req, res, next) => {
  try {
     const token = req.cookies.accessToken
     console.log(token)
     if(!token){
      res.status(401).json({ message: 'Not authenticated' })
     }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY) 

    const userId = decoded.userID

    const user = await User.findById(userId).select('-password').lean()
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    req.user = user;

    next()
  } catch (error) {
    return res.status(401).json({ message: 'Authentication failed' });
  }
})


// @desc Create new user
// @route POST /users
// @access Private

const createNewUser = asyncHandler(async (req, res) => {
  const { username, phone, email, password, password_confirmation } = req.body;

  if (!username || !phone || !password || !email || !password_confirmation) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const duplicate = await User.findOne({
    $or: [{ username }, { email }, { phone }],
  })
    .lean()
    .exec();

  if (duplicate) {
    if (duplicate.username === username) {
      return res.status(409).json({ message: "Username already exists" });
    }
    if (duplicate.email === email) {
      return res.status(409).json({ message: "Email already exists" });
    }
    if (duplicate.phone === phone) {
      return res.status(409).json({ message: "Phone number already exists" });
    }
  }

  if (password !== password_confirmation) {
    return res
      .status(409)
      .json({ message: `Password and Confirm Password doesn't match` });
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const userObject = { username, phone, email, password: hashPassword };
  const UserModel = await User.create(userObject);
  if (UserModel) {
    //created

    const saved_user = await User.findOne({ email: email });

    const accessToken = generateAccessToken(saved_user);
    res.cookie("accessToken", accessToken, cookieOptions);
    res.status(201).send({
      status: "success",
      message: "Registration Success",
    });
  } else {
    res.status(400).json({ message: "Invalid user data received" });
  }
});

let refreshTokens = [];

const loginauth = asyncHandler(async (req, res) => {
  try {
    const {  email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({
          error: "Username or email is required, and password is compulsory.",
        });
    }

    const user = await User.findOne({
      email
    })
      .lean()
      .exec();
    if (!user) {
      return res.status(401).json({ error: "No User  found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "password did not matched" });
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    res.cookie("accessToken", accessToken, {
      ...cookieOptions,
      maxAge: 15 * 60 * 1000, // Access token valid for 15 minutes
    });
    res.cookie("refreshToken", refreshToken, {
      ...cookieOptions,
      maxAge: 30 * 24 * 60 * 60 * 1000, // Refresh token valid for 30 days
    });

    // console.log('Set-Cookie header:', res.getHeader('Set-Cookie'));

    refreshTokens.push(refreshToken);
    res.status(200).json({ status: "success", message: "Login Successfully" , user: user.username});
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
});

const RefreshToken = asyncHandler(async (req, res) => {
  // const refreshToken = req.body.token;
  const refreshToken = req.cookies?.refreshToken; 
  // console.log(refreshToken,'refreshT');
  
  if (!refreshToken) return res.status(401).json("You are not authenticated!");

  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json("Refresh token is not valid!");
  }

  jwt.verify(refreshToken, process.env.JWT_SECRET_KEY, (err, user) => {
    
    err && console.log(err);

    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    refreshTokens.push(newRefreshToken);

    res.cookie("accessToken", newAccessToken, {
      ...cookieOptions,
      maxAge: 15 * 60 * 1000,
    });
    res.cookie("refreshToken", newRefreshToken, {
      ...cookieOptions,
      maxAge: 30 * 24 * 60 * 60 * 1000, 
    });

    return res.status(200).json({
      message: " Refreshed successfully",
      user: user,
      accessToken: newAccessToken
    });
  });
});

const logoutUser = (req, res) => {
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");
  res.status(200).json({ message: "Logged out successfully" });
};

const changeUserPassword = asyncHandler(async (req, res) => {
  const { password, password_confirmation } = req.body;
  if (!password || !password_confirmation) {
    res.status(400).json({ message: "All Fields are Required" });
  }

  if (password !== password_confirmation) {
    res.send({
      status: "failed",
      message: "New Password and Confirm New Password doesn't match",
    });
  } else {
    const salt = await bcrypt.genSalt(10);
    const newHashPassword = await bcrypt.hash(password, salt);
    await User.findByIdAndUpdate(req.user._id, {
      $set: { password: newHashPassword },
    });
    res.send({ status: "success", message: "Password changed succesfully" });
  }
});

const generateAccessToken = (user) => {
  return jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "30min",
  });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "5d",
  });
};





module.exports = {
  createNewUser,
  loginauth,
  changeUserPassword,
  RefreshToken,
  logoutUser,
  checkAuth,
  getAllUsers,

};
