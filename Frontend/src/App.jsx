import  Router  from "./Router.jsx"
import "./style.scss"
import { RegisterContext } from "./Features/Auth/Context/Register.Context.jsx"
import { PostContext } from "./Features/post/Context/PostContext.jsx"
function App() {

  return (
    <RegisterContext>
      <PostContext>
       <Router/>
      </PostContext>
    </RegisterContext>
  )
}

export default App
