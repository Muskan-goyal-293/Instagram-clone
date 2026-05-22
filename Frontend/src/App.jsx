import  Router  from "./Router.jsx"
import "./style.scss"
import { RegisterContext } from "./Features/Auth/Context/Register.Context.jsx"
import { PostContext } from "./Features/post/Context/PostContext.jsx"
import { EditContext } from "./Features/UserProfileInfo/Context/EditContext.jsx"
function App() {

  return (
    <RegisterContext>
      <PostContext>
        <EditContext>
       <Router/>

        </EditContext>
      </PostContext>
    </RegisterContext>
  )
}

export default App
