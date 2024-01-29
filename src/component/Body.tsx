import React from "react"
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";

import style from './Body.module.scss'
import { Outlet } from "react-router-dom";

const Body = () => {
  return <div className={style.body}>
    <SideBar/>
    <Outlet />
    {/* <MainContainer/> */}
  </div>  
}

export default Body;