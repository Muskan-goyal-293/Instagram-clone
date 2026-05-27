import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Features/Auth/Components/Home'
import Register from './Features/Auth/Pages/Register'
import Login from './Features/Auth/Pages/Login'
import Feed from './Features/post/Pages/Feed'
import CreatePost from './Features/post/Pages/CreatePost'
import Mainlayout from './Features/Layout/Mainlayout'
import EditProfile from './Features/UserProfileInfo/Pages/EditProfile'
import ProfilePage from "./Features/UserProfile/Pages/ProfilePage"
import AllFeed from './Features/Home/Pages/AllFeed'
import SavePost from './Features/SavePost/Pages/SavePost'
import Reel from './Features/Reels/Pages/Reel'
import CreateReel from './Features/Reels/Pages/CreateReel'
import Search from './Features/Home/Pages/Search'
function Router() {
  return (

    <Routes>

      {/* without sidebar */}
   <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />


      {/* with sidebar */}
      <Route element={<Mainlayout />}>
      <Route path='/create-reel' element={<CreateReel/>}/>
              <Route path='/feed' element={<Feed />} />
        <Route path="/home" element={<AllFeed/>}/>
        <Route path='/reels' element={<Reel/>}/>
        <Route path='/create' element={<CreatePost />} />
         <Route path='/edit' element={<EditProfile/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/save' element={<SavePost/>}/>
        <Route path='/Search' element={<Search/>}/>
      </Route>

    </Routes>
  )
}

export default Router