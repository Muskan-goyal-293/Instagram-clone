import { useState } from "react";
import SaveHook from "../Hooks/SaveHook"
import { FaBookmark } from "react-icons/fa";

function SaveButton({savePost}) {
    console.log(savePost)
    const [save , setSave] = useState(false);
    const {saveFun} = SaveHook();
    
    async function saveFunction(savePost){
    
    const response = await saveFun(savePost);
    if(response){
           setSave(!save)
    }
}


  return (
       <button className="save-btn" 
       style= {{backgroundColor : save ? "blue" :"" }}
       onClick={()=>{
        saveFunction(savePost)
       }}>
                <FaBookmark />
              </button>
           
  )
}

export default SaveButton
