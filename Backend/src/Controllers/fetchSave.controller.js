const saveModel = require("../Model/saveModel");

const saveAllPost = async (req, res)=>{
    const {id} = req.user;

    try{
        const data =await saveModel.find().populate("post");
         return res.status(200).json({
            success: true,
            "message" : "all post fetch",
            data : data
         })  
    }
    catch(err){
        return res.status(500).json({
            success : false,
            "message" : err.message
        })
    }
}

module.exports = saveAllPost