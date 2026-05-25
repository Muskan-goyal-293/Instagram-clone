const express = require("express");
const savePostRout = express.Router();
const  verifyUser =  require("../Middleware/auth.middleware");

const saveAllPost = require("../Controllers/fetchSave.controller");
savePostRout.get("/save" , verifyUser , saveAllPost)

module.exports = savePostRout; 