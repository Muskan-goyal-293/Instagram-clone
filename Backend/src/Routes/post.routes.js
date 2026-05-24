const express = require("express");
const postRout = express.Router();
const verifyUser = require("../Middleware/auth.middleware");
const multer = require("multer");
const upload = multer({storage : multer.memoryStorage(), limits:{
   fileSize: 2 * 1024 * 1024
 }
});
const {createPost} = require("../Controllers/post.controller")


// api => http://localhost:3000/api/create-post
postRout.post("/create-post", verifyUser,upload.single("image"),createPost)

module.exports = postRout