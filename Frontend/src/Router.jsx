import React from 'react'
import { Routes, Route } from "react-router-dom"

import Home from './Features/Auth/Components/Home'
import Register from './Features/Auth/Pages/Register'
import Login from './Features/Auth/Pages/Login'
import CreatePost from './Features/post/Pages/CreatePost'

import Mainlayout from './Features/Layout/Mainlayout'
import Feed from './Features/post/Pages/Feed'
import EditProfile from './Features/UserProfileInfo/Pages/EditProfile'
import ProfilePage from "./Features/UserProfile/Pages/ProfilePage"
function Router() {
  return (

    <Routes>

      {/* without sidebar */}
   <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />


      {/* with sidebar */}
      <Route element={<Mainlayout />}>

        <Route path='/feed' element={<Feed />} />
        <Route path='/create' element={<CreatePost />} />
         <Route path='/edit' element={<EditProfile/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
      </Route>

    </Routes>
  )
}

export default Router