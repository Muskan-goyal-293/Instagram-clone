import { PostMeProviderContext } from "../Context/PostMeContext"
import { useContext } from "react"
import {post} from "../Api/profileApi"
function PostHook() {
const{error , setError , loading , setLoading , result, setResult} = useContext(PostMeProviderContext)

const postFun = async()=>{
    try{
        setError("");
        setResult([]);
        setLoading(true);
        const result = await post();
        setResult(result.data.data);
        return  true;
    }catch(err){
        setError(err.response?.data?.message || "something went wrong");
        return false; 
    }
    finally{
        setLoading(false);
    }
}


  return {error, loading , result, postFun , }
}

export default PostHook
