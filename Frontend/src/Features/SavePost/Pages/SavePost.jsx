import "../Style/SavePostStyle.scss";
import SaveAllPostHook from "../Hook/SaveAllPostHook";
import { useEffect } from "react";

function SavePost() {
const {error , result ,  loading , saveAllPostFun} = SaveAllPostHook();
  
async function savePostFun() {
    const response= await saveAllPostFun();
       console.log(result)
    if(!response){
        return
    }
}


useEffect(()=>{
savePostFun()
},[])
  return (
    <div className="save-post">

      <h2>Saved Posts</h2>
         {error && <p className="error">{error}</p>}
          {loading && <p className="loading">{loading}</p>}
      <div className="save-grid">

        {result.map((val) => {
          return <div className="save-card" key={val._id}>
            <img src={val.post.image} alt="saved-post" />
          </div>
})}

      </div>
    </div>
  );
}

export default SavePost;