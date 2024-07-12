import User from "../models/user.js";
import jwt from "jsonwebtoken";
import { promisify } from "util";
// import asyncHandler from "express-async-handler";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "90d" });
};

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, pic } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    const newUser = await User.create({
      name,
      email,
      password,
      pic,
    });

    if (newUser) {
      res.status(200).json({
        status: "success",
        data: newUser,
      });
    } else {
      res.status(400);
      throw new Error("failed to create user");
    }
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // see we are getting email n pass
    if (!email || !password) {
      res.status(400).json({
        status: "fail",
        message: "Please provide email and Password",
      });
    }

    // see if email password correct
    const user = await User.findOne({ email });
    if (!user || !(await user.checkPassword(password, user.password))) {
      res.status(400).json({
        status: "fail",
        message: "incorrect email or password",
      });
    }

    // if everything fine, return jwt
    const token = signToken(user._id);
    res.status(200).json({
      status: "success",
      data: token,
    });
  } catch (error) {
    console.log(error);
  }
};

// protecting routes
export const Protect = async (req, res, next) => {
  try {
    let token;
    // checking if there is any token sent
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        status: "fail",
        message: "You are not logged in!",
      });
    }
    // token verification
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    req.body.id = decoded.id;
    /* basic part over , next steps are extra measures of security */
    // check if user still exists
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({
        status: "fail",
        message: "user no longer exists",
      });
    }

    // after above 3 steps done allow access
    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      res.status(401).json({
        status: "fail",
        message: "invalid token",
      });
    }
  }
};
