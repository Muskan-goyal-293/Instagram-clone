import React from 'react'
import {Link} from "react-router-dom"
import "../Style/sideBar.scss"


import { IoAddCircle } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { RiFolderVideoFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { FaBookmark } from "react-icons/fa";


function Sidebar() {
  return (
   <main className='sidebar'>
    <Link><FaInstagram /></Link>
    <Link to="/Home"><MdHome /><span>Home</span></Link>
    <Link to="/Reels"><RiFolderVideoFill /><span>Reels</span></Link>
 <Link to="/Search"><FaSearch /><span>Search</span></Link>
 <Link to="/Create"><IoAddCircle/><span>Create</span></Link>
   <Link to="/Profile"><FaUserCircle /><span>Profile</span></Link>
   <Link to="/edit"><FaUserEdit /><span>Edit</span></Link>
 <Link to="/save"> <FaBookmark /><span>Save</span></Link>  
<Link to="/logout"><FiLogOut /><span>Logout</span></Link>
   </main>
  )
}

export default Sidebar
