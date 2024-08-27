const jwt = require("jsonwebtoken");
const User = require("../models/User");

// without cookie
// const verifyToken = async (req, res, next) => {
//   let token;
//   const { authorization } = req.headers;

//   if (authorization && authorization.startsWith("Bearer")) {
//     try {
//       token = authorization.split(" ")[1];

//       // Verify Token
//       const { userID } = jwt.verify(token, process.env.JWT_SECRET_KEY);
//       // Get User from Token
//       req.user = await UserModel.findById(userID).select("-password");
//       next();
//     } catch (error) {
//       console.log(error);
//       res.status(401).send({ status: "failed", message: "Unauthorized User" });
//     }
//   }

//   if (!token) {
//     res
//       .status(401)
//       .send({ status: "failed", message: "Unauthorized User, No Token" });
//   }
// };


// with cookie

const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies?.accessToken; // Read the token from the HTTP-only cookie
    
    console.log(token,'token');
    
    if (!token) {
      return res
        .status(401)
        .send({ status: "failed", message: "Unauthorized User, No Token" });
    }

    // Verify Token
    const { userID } = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Get User from Token
    req.user = await User.findById(userID).select("-password").lean();

    if (!req.user) {
      return res
        .status(401)
        .send({ status: "failed", message: "Unauthorized User, User not found" });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({ status: "failed", message: "Unauthorized User" });
  }
};



module.exports = verifyToken;
