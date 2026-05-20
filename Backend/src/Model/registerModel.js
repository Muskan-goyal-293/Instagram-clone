const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
email:{
type : String,
required : [true , "field must be require"],
unique : true,
},
password :{
    type : String,
    required :[true , "field must be require"],
    minlength :6,
    select : false,
},
month:{
    type : String,
    required :[true ,"field must be require"],
},
day:{
    type:Number,
    required :[true , "field must be require"],
},
year :{
    type : Number,
    required :[true , "field  must be require"],
},
userName:{
    type : String,
    unique : true,
    required :[true , "field must be require"],
    minlength : 2,
},
lastName:{
    type :String,
    required:[true, "field must be required"],
    minlength : 2,
},
},{
    timestamps : true
})


const userModel = mongoose.model ("user", userSchema);

module.exports = userModel