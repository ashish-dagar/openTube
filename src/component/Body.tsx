import React from "react"
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";

import style from './Body.module.scss'

const Body = () => {
  return <div className={style.body}>
    <SideBar/>
    <MainContainer/>
  </div>  
}

export default Body;