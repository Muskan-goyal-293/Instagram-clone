import "../Style/homeStyle.scss";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import HomeHook from "../Hooks/HomeHook";
import { useEffect } from "react";

function AllFeed() {
 const {error , result, loading, homeFun} = HomeHook()
async function home(){
  const response = await homeFun();
  if(!response){
    return 
  }
}

 useEffect(()=>{
 home()
 },[])

  return (
    <div className="feed">
      <div className="feed-container">
         {error && <p className="error">{error}</p>}
         {loading && <p className="loading">Loading....</p>}
       {result.map((val)=>{
               return <div className="post-card" key={val._id}>
            
            {/* User Info */}
            <div className="post-header">
              <img
                src={val.user.profileImage}
                alt="user"
                className="user-image"
              />

              <h4>{val.user.userName}</h4>
            </div>

            {/* Post Image */}
            <div className="post-image">
              <img src={val.image} alt="post" />
            </div>

            {/* Buttons */}
            <div className="post-actions">
              <button className="like-btn">
                 <FaHeart />

              </button>

              <button className="save-btn">
                <FaBookmark />
              </button>
            </div>

            {/* Caption */}
            <p className="caption">
               {val.caption}
            </p>
          </div>
     
       })}
          
      </div>
    </div>
  );
  
}

export default AllFeed

