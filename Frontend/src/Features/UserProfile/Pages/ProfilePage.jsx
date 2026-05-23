import React, { useEffect, } from "react";
import "../Style/profileStyle.scss";
import profileHook from "../Hook/ProfileHook";
import Post from "./Post";
function ProfilePage() {
    const{setError , loading , error , result , profileFun} =profileHook() 
  
    async function profileData(){
        const result = await profileFun();
        if(!result){
            return
        }
    }
    useEffect(()=>{
        setError("");
       profileData()

    },[])
    return (
    <main className="profilePage">
      {/* TOP PROFILE SECTION */}
      <section className="profileHeader">

        {error && <p className="error">{error}</p>}
       {loading && <p>Loading....</p>}
        <div className="profileImage">
          <img
            src={result.profileImage}
            alt="profile"
          />
        </div>

        <div className="profileInfo">

          <div className="topInfo">
            <h2>{result.userName}</h2>

          </div>

          <div className="profileStats">
            <div>
              <span>12</span>
              <p>Posts</p>
            </div>

            {/* <div>
              <span>2.5k</span>
              <p>Followers</p>
            </div>

            <div>
              <span>320</span>
              <p>Following</p>
            </div> */}
          </div>

          <div className="bio">
            <p>
              {result.bio}
            </p>
          </div>

        </div>
      </section>
 <Post></Post>
    </main> 
  );
}

export default ProfilePage;