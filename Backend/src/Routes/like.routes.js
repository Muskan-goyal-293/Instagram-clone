// require module
const express = require("express");
const likeRout = express.Router();
const verifyUser = require("../Middleware/auth.middleware");
const like = require("../Controllers/like.controller");


// api => http://localhost:3000/api/like/:postId
likeRout.post("/like/:postId" , verifyUser , like)


// export route
module.exports = likeRout
