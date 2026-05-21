import { PostProviderContext } from "../Context/PostContext";
import { useContext } from "react";
import postCreate from "../Api/postApi";

function PostHook() {

 // context se state li
 const {
    error,
    setError,
    loading,
    setLoading,
    result,
    setResult
 } = useContext(PostProviderContext);


 // create post function
 const postCreateFun = async(caption , image)=>{
    if(!image){
      return setError("image must be required")
    }

    try{
   
     // old error remove kiya
     setError("");

     // old result remove kiya
     setResult("");

     // loading start
     setLoading(true);

     // api call ki
     const response = await postCreate(
        caption,
        image
    );

     // success message save kiya
     setResult(response.data?.message);

     return true;

    }

    catch(err){

        // backend error message
        setError(
            err.response?.data?.message ||
            "Something went wrong"
        )

     return false;
    }

    finally{

     // loading stop
     setLoading(false)

    }

 } 


 // values return ki
 return {
    error,
    loading,
    result,
    postCreateFun
 }

}

export default PostHook