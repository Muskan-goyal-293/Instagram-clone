import "../Style/HomeLeftComponentStyle.scss";
import instaImage1  from "../../../Images/instaCoverImage1.jpg";
import instaImage2 from "../../../Images/instaCoverImage2.jpg";
import instaImage3 from "../../../Images/instaCoverImage3.jpg";


function HomeLeft() {
  return (
  <main className="left">
     <div className="leftWrapper">

         <h1>See everyday moments from</h1>
         <h1>your <span>close friends</span>.</h1>

         <div>
            <img  className="first" src={instaImage1} alt="Cover image" />
            <img className="sec" src={instaImage2} alt="Cover image" />
            <img className="third" src={instaImage3} alt="Cover image" />
         </div>
     </div>
  </main>
  )
}

export default HomeLeft
