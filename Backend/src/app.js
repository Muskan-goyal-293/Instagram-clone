// require module
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const cookiesParser = require("cookie-parser");
const authRout = require("./Routes/auth.routes");
const postRout = require("./Routes/post.routes");
const editRout = require("./Routes/edit.routes");
const profileRout = require("./Routes/profile.routes");
const homeRout = require("./Routes/home.routes");
const likeRout = require("./Routes/like.routes");
const saveRout = require("./Routes/save.routes");
const savePostRout = require("./Routes/fetchAllSavePost.routes");
// middleWre
app.use(express.json());
app.use(cookiesParser());
app.use(cors({
    origin :"http://localhost:5173",
    credentials : true
}))
app.use("/api", authRout);
app.use("/api" , postRout);
app.use("/api" , editRout);
app.use("/api", profileRout);
app.use("/api" , homeRout);
app.use("/api", likeRout);
app.use("/api" , saveRout);
app.use("/api", savePostRout)
// export module

module.exports={app, port}