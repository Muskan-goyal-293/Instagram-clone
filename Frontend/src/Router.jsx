import React from 'react'
import { Routes, Route } from "react-router-dom"

import Home from './Features/Auth/Components/Home'
import Register from './Features/Auth/Pages/Register'
import Login from './Features/Auth/Pages/Login'
import CreatePost from './Features/post/Pages/CreatePost'

import Mainlayout from './Features/Layout/Mainlayout'
import Feed from './Features/post/Pages/Feed'

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

      </Route>

    </Routes>
  )
}

export default Router