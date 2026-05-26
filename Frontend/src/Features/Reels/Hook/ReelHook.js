import { useContext } from "react"
import reelFunction from "../Api/reelApi"
import { ReelProviderContext } from "../Context/ReelContext"
function ReelHook() {
  const {error, setError , loading , setLoading , result , setResult} = useContext(ReelProviderContext);
   const reelFun = async (caption , reel)=>{
    try{
        setError("");
        setResult("")
        setLoading(true);
       const response = await reelFunction(caption,reel)
       setResult(response.data);
       return true
    }catch(err){
        setResult(err.response?.data?.message);
        return false;
    }
    finally{
        setLoading(false);
    }
   }  
  
  
  return {error , loading , result , reelFun}
}

export default ReelHook
