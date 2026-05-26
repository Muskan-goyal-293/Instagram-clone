const mongoose = require("mongoose");

const reelSchema = new mongoose.Schema({
  reel :{
    type : String,
    required : true,
  },
  caption :{
    type : String,
    default :"",
    trim: true
  },
  user :{
    type : mongoose.Schema.Types.ObjectId,
    ref : "user" ,
    required : true,
  }
})

const reelModel = mongoose.model("reel" , reelSchema);

module.exports= reelModel;
