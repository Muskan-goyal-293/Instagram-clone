// require module
require("dotenv").config();
const {app, port} = require("./src/app");
const connectToDb = require("./src/Database/database");

// database  function call 
connectToDb()


//  app start 
app.listen(port ,()=>{
    console.log("app is listen")
})