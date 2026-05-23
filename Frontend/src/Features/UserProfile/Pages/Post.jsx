import "../Style/profileStyle.scss"
import PostHook from "../Hook/postHook"
import { useEffect } from "react";
function Post() {
  const {result ,loading ,  error , postFun} = PostHook()
  async function postFunction(){
    const response = await postFun();
    if(!response){
        return
    } 
  }  
  
  useEffect(()=>{
    postFunction()
  },[])
  
  return (
    <>
      {/* POSTS SECTION */}
      <section className="postsSection">
        {error && <p className="error">{error}</p>}
        {loading && <p className="loading">Loading....</p>}
        {result.map((val)=>{
          return <div key={val.id} className="post">
          
          <img
            src={val.image}
            alt=""
          />
          <h5>{val.caption}</h5>
        </div>
 

        })}
             </section>
    </>
  )
}

export default Post 