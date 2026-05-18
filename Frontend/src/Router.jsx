import React from 'react'
import{Routes ,Route} from "react-router-dom"
import Home from './Features/Auth/Components/Home'
import Register from './Features/Auth/Pages/Register'
import Login from './Features/Auth/Pages/Login'
function Router() {
  return (
 <Routes>
<Route path='/' element={<Home/>} />
<Route path='/register' element={<Register/>}/>
<Route path='/login' element={<Login/>}/>
 </Routes>  )
}

export default Router
