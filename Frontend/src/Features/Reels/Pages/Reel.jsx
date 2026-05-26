import { Link } from "react-router-dom";
import "../Style/reelStyle.scss";
import CreateReel from "./CreateReel";
import FetchAllReelHook from "../Hook/FetchAllReelHook";
import { useEffect } from "react";
function Reel() {
const {loading , error , result ,     fetchAllReelFunction} = FetchAllReelHook()

async function reelFun() {
  const response = await fetchAllReelFunction();
  if(!response){
    result
  }
}
useEffect(()=>{
reelFun()
},[])

  return (
    <div className="reel-page">

      <button className="create-reel-btn">
        <Link className="link" to="/Create-Reel"> + Create Reel </Link>
      </button>
        
         {loading && <p className="loading" >"Loading...</p>}
         {error && <p className="error">{error}</p>}
      {result.map((val) => (
        <div className="reel-wrapper" key={val._id}>

          <video
            src={val.reel}
            autoPlay
            loop
            playsInline
            className="reel-video"
          />

          <div className="reel-overlay"></div>

          <div className="reel-info">

            <div className="reel-user">

              <img src={val.user.profileImage} alt="" />

              <h3>@{val.user.userName}</h3>

            </div>

            <p>{val.caption}</p>

          </div>

        </div>
      ))}

    </div>
  );
}

export default Reel;