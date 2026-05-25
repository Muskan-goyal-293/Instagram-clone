const saveModel = require("../Model/saveModel");
const postModel = require("../Model/postModel");
const save =  async(req,res)=>{
    
const {id} = req.user;
const {savePost} = req.params;

try{
 const data = await postModel.findById(savePost);

 if(!data){
    return res.status(404).json({
        success :false ,
        "message" : "post not found"
    }) 
 }

 const postData = await saveModel.findOneAndDelete({
    user :id ,
    post : savePost
 })

 if(postData){
    return res.status(200).json({
        success : true,
        "message" : "post unsave",
    })
 }

const savePostData = await saveModel.create({
    user : id,
    post : savePost
}) 

return res.status(201).json({
    success : true ,
    "message" : "post save"
})
}
catch(err){
    return res.status(500).json({
        success : false,
        "message" : err.message
    })
}
}

module.exports = save