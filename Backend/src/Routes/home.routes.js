// import require module
const express = require("express");
const homeRout = express.Router();
const home = require("../Controllers/home.controller");
const verifyUser = require("../Middleware/auth.middleware");

// api => http://localhost:3000/api/home
homeRout.get("/home", verifyUser, home);

// export router
module.exports = homeRout;
