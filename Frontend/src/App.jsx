import  Router  from "./Router.jsx"
import "./style.scss"
import { RegisterContext } from "./Features/Auth/Context/Register.Context.jsx"
import { PostContext } from "./Features/post/Context/PostContext.jsx"
import { EditContext } from "./Features/UserProfileInfo/Context/EditContext.jsx"
import { ProfileContext } from "./Features/UserProfile/Context/ProfileContext.jsx"
import { PostMeContext } from "./Features/UserProfile/Context/PostMeContext.jsx"
function App() {

  return (
    <RegisterContext>
      <PostContext>
        <EditContext>
          <ProfileContext>
            <PostMeContext>
           <Router/>
            </PostMeContext>
          </ProfileContext>
        </EditContext>
      </PostContext>
    </RegisterContext>
  )
}

export default App
