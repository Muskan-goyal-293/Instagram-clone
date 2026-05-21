import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import React from 'react'
function Mainlayout() {
  return (
    <main className="layout">

      <Sidebar />

      <div className="pages">
<Outlet></Outlet>
      </div>

    </main>
  )
}
export default Mainlayout
