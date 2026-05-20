// require module
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const cookiesParser = require("cookie-parser");
const authRout = require("./Routes/auth.routes");


// middleWre
app.use(express.json());
app.use(cookiesParser());
app.use(cors({
    origin :"http://localhost:5173",
    credentials : true
}))
app.use("/api", authRout);



// export module

module.exports={app, port}