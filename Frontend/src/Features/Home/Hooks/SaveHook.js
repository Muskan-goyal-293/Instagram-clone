import save  from"../Api/saveApi";
import { SaveProviderContext } from "../Context/SaveContext";
import { useContext } from "react";


function SaveHook() {
  const{error, setError , result , setResult} = useContext(SaveProviderContext); 
    const saveFun = async(savePost)=>{
    try{
   setError("");
   setResult("");
   const response = await save (savePost);
   setResult(response.data);
   return true; 
    }
    catch(err){
        setError(err.response)
    }
  }
  return {saveFun}
}

export default SaveHook
