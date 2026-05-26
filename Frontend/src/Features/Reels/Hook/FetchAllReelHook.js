import { useContext } from "react"
import { FetchAllReelProviderContext } from "../Context/FetchAllReelContext"
import fetchReelFun from "../Api/featchAllReel"
function FetchAllReelHook() {
const {error, result , loading , setError , setLoading , setResult} = useContext(FetchAllReelProviderContext)
const fetchAllReelFunction = async()=>{
    try{
        setLoading(true);
        setError("");
        setResult([]);
        const response = await fetchReelFun();
        setResult(response.data?.data);
        return true
    }
    catch(err){
        setError(err.response?.data?.message || "something went wrong");
         return false
    }
    finally{
        setLoading(false)
    }
} 
  return {error , result ,loading , fetchAllReelFunction}
}

export default FetchAllReelHook
