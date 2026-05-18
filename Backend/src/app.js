// require module
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const cookiesParser = require("cookie-parser")


// middleWre
app.use(express.json());
app.use(cookiesParser());
app.use(cors({
origin :"http://localhost:5173",
credentials : true
}))



// export module

module.exports={app, port}