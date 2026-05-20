import  Router  from "./Router.jsx"
import "./style.scss"
import { RegisterContext } from "./Features/Auth/Context/Register.Context.jsx"
function App() {

  return (
    <RegisterContext>
      <Router/>

    </RegisterContext>
  )
}

export default App
