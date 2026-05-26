const postModel = require("../Model/postModel");
const likeModel = require("../Model/LikeModel");

const like = async(req, res)=>{

 // current login user id
 const {id} = req.user;
 // post id from params
 const {postId} = req.params;

 try{

 // check post exist or not
 const postData = await postModel.findById(postId);

 if(!postData){
    return res.status(404).json({
        success :false,
        "message" : "post not found"
    })
 }

 // check if user already liked the post
 // if like exists then delete it (unlike)
 const likeData = await likeModel.findOneAndDelete({
    post : postId ,
    user :id
});  

 // unlike response
 if(likeData){
 return res.status(200).json({
    success : true,
    "message" : "dislike post"
 })
}
 // create new like document
 const data = await likeModel.create({
    user : id,
    post : postId,
   
})

 // like response
 return res.status(201).json({
    success : true,
    "message" : "like post",
    data
 })

 }

 catch(err){

    // server error
    return res.status(500).json({
        success : false ,
        "message" : err.message
    }) 

 }

}
module.exports = like