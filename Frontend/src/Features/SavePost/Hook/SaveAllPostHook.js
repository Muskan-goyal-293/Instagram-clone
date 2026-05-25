import { useContext } from "react"
import { SaveAllPostProviderContext } from "../Context/SaveAllPostContext"
import saveAllPost from "../Api/savePostApi" 
function SaveAllPostHook() {
    const {error , setError , loading , setLoading , result , setResult} = useContext(SaveAllPostProviderContext)
      
    const saveAllPostFun = async ()=>{
        try{
            setError("");
            setResult([]);
            setLoading(true);
            const response = await saveAllPost();
            setResult(response.data?.data);
            console.log(response.data?.data)
            return true;
        }
        catch(err){
            setError(err.response?.data?.message || "something went wrong");
            return false;
        }finally{
            setLoading(false)
        }
    }
    return {error , loading , result , saveAllPostFun}
}

export default SaveAllPostHook
