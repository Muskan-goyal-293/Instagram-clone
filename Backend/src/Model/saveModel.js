const mongoose = require("mongoose");

const saveSchema = new mongoose.Schema({
    post:{
        type : mongoose.Schema.Types.ObjectId,
        ref :"post",
        require:true,
    },
    user :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        require : true,
    }
})

const saveModel = mongoose.model("save" , saveSchema);

module.exports = saveModel;