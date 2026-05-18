// require module
const mongoose = require("mongoose")

// function to connect to  database

function connectToDb (){
 mongoose.connect(process.env.MONGOOSE_URL)
 .then((res)=>{
    console.log("connect to data base")
 })
 .catch((err)=>{
    console.log("not connected " , err)
 })
}

//  export function 
module.exports = connectToDb
