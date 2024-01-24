import React from "react"
import style from "./SideBar.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";


const SideBar = () => {
  const isMenuOpen = useSelector((store: RootState) => store.app.isMenuOpen)
  console.log("---", isMenuOpen)
  if (!isMenuOpen) return null;

  return <div className={style.sideBar} >
    <ul>
      <li>Home</li>
      <li>Shorts</li>
      <li>Subscriptions</li>
    </ul>
    <h3>Subscriptions</h3>
    <ul>
      <li>Music</li>
      <li>Sports</li>
      <li>Gaming</li>
    </ul>
  </div>  
}

export default SideBar;