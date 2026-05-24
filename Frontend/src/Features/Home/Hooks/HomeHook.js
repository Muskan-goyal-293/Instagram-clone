import { useContext } from "react"
import { HomeProviderContext } from "../Context/HomeContext"
import home from "../Api/homeApi";
function HomeHook() {
const{error , setError , loading , setLoading , setResult, result} = useContext(HomeProviderContext);

const homeFun = async ()=>{
    try{
        setError("");
        setResult([]);
        setLoading(true);
        const response = await home();
        setResult(response.data?.data);
        return true;
    }catch(err){
        setError(err.response?.data?.message);
        return false
    }finally{
setLoading(false)
    }
}

return {error, loading , result, homeFun}


}

export default HomeHook
