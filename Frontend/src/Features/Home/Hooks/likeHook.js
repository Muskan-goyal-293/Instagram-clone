import { useContext } from "react";
import like from "../Api/likeApi";
import { LikeProviderContext } from "../Context/LikeContext";
function LikeHook() {
    const {error , setError , result , setResult} = useContext(LikeProviderContext)
   const likeFun =async(postId)=>{
    try{
        setError("");
        setResult("");
        const response = await like(postId);
        setResult(response.data?.message);
        return true; 
    }
    catch(err){
        setError(err.response?.data?.message);
        return false
    }
   } 
  
  
    return {result , error , likeFun}
}

export default LikeHook
