import { useDispatch } from "react-redux";
import hamburger from "../img/hamburger.svg";
import youtube from "../img/YouTube-Logo.svg";

import style from "./Head.module.scss";
import { toggleMenu } from "../store/slice/appSlice";

const Head = () => {

  const dispatch = useDispatch();
  return <div className={style.head}>
    <div>
      <img className={style.img} src={hamburger} alt="your svg" onClick={()=>dispatch(toggleMenu())}/>
      <span>Open TUBE</span>
    </div>
    <div className={style.search}>
      <input />
      <button>search</button>
    </div>
    <img className={style.img} src={hamburger} alt="your svg" />
  </div>
}

export default Head;