import { ProfileProviderContext } from "../Context/ProfileContext";
import {profile} from"../Api/profileApi"
import { useContext } from "react";


function ProfileHook() {
  const {loading , setLoading, error,setError , result ,setResult}= useContext(ProfileProviderContext);

  const profileFun = async ()=>{
    try{
        setError("");
        setLoading(true);
        setResult("");
        const response = await profile()
        setResult(response.data?.data)
        return true
    }
    catch(err){
        setError(err.response?.data?.message || "something went wrong")
       return false
    }
    finally{
        setLoading(false)
    }
  }
  return{loading, setError , setResult , error , result , profileFun} 
}

export default ProfileHook
