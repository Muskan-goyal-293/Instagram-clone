// require module
const express = require("express");
const authRout = express.Router();
const {register , login} = require("../Controllers/auth.controller");

//  export module
module.exports = authRout;

// api => http://localhost:3000/api/register
authRout.post("/register", register);

// api => http://localhost:3000/api/login
authRout.post("/login" , login );