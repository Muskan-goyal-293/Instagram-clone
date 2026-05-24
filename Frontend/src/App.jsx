import  Router  from "./Router.jsx"
import "./style.scss"
import { RegisterContext } from "./Features/Auth/Context/Register.Context.jsx"
import { PostContext } from "./Features/post/Context/PostContext.jsx"
import { EditContext } from "./Features/UserProfileInfo/Context/EditContext.jsx"
import { ProfileContext } from "./Features/UserProfile/Context/ProfileContext.jsx"
import { PostMeContext } from "./Features/UserProfile/Context/PostMeContext.jsx"
import {HomeContext} from "./Features/Home/Context/HomeContext.jsx"
import { LikeContext } from "./Features/Home/Context/LikeContext.jsx"
function App() {

  return (
    <RegisterContext>
      <PostContext>
        <EditContext>
          <ProfileContext>
            <PostMeContext>
              <HomeContext>
                <LikeContext>
                 <Router/>
                </LikeContext>
              </HomeContext>
            </PostMeContext>
          </ProfileContext>
        </EditContext>
      </PostContext>
    </RegisterContext>
  )
}

export default App
