const express = require("express");
const profileRout = express.Router();

const verifyUser = require("../Middleware/auth.middleware");
const userModel = require("../Model/registerModel");
const postModel = require("../Model/postModel");
const {post , profile} = require("../Controllers/profile.controller");

// USER PROFILE
profileRout.get(
  "/profile",
  verifyUser,
  profile
);


// USER POSTS
profileRout.get(
  "/posts/me",
  verifyUser,
  post
);

module.exports = profileRout;