const express = require("express");
const profileRout = express.Router();

const verifyUser = require("../Middleware/auth.middleware");
const {post , profile} = require("../Controllers/profile.controller");

// USER PROFILE
// api => http://localhost:3000/api/profile
profileRout.get(
  "/profile",
  verifyUser,
  profile
);


// USER POSTS
// http://localhost:3000/api/posts/me
profileRout.get(
  "/posts/me",
  verifyUser,
  post
);

module.exports = profileRout;