import instagramLogo from "../../../Images/instagramLogo.png"
import {Link} from "react-router-dom";
import "../Style/HomeRightComponentStyle.scss"
import Login from "../Pages/Login";
import Register from "../Pages/Register";
function HomeRight() {
  return (
    <main className="right">
        <div className="rightWrapper">
            <img className="logo" src={instagramLogo} alt="insta gram logo image" />
            <h1>Get the full experience with the</h1>
            <h1>tablet app</h1>
            <button>Open instagram</button>
   <div>
   <Link className="link" to="login">Log in</Link>or
 <Link className="link" to="/register">Sign Up</Link>
   </div>

        </div>
    </main>
  )
}

export default HomeRight
