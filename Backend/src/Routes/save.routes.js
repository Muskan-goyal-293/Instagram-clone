// import module
const express = require("express");
const saveRout = express.Router();
const verifyUser = require("../Middleware/auth.middleware");
const save = require("../Controllers/save.controller");


// api => http://localhost:3000/api/save/:savePost
saveRout.post("/save/:savePost" , verifyUser , save )



// export
module.exports =saveRout