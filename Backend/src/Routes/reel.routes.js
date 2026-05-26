const express = require("express");
const reelRout = express.Router();
const verifyUser = require("../Middleware/auth.middleware");
const multer = require ("multer");
const upload = multer({storage : multer.memoryStorage() ,
    limits : 5 * 1024*1024
})
const {reelFun , fetchReel} = require("../Controllers/createReel.controller");

// api => http://localhost:3000/api/reel
reelRout.post("/reel" , verifyUser , upload.single("reel"), reelFun)

// api => http://localhost:3000/api/get-reel
reelRout.get("/get-reel" , verifyUser , fetchReel)

module.exports = reelRout;

