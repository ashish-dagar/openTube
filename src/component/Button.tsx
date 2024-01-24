import style from "./Button.module.scss";

const Button = ({ name }: {name: string}) => {
    return <button className={style.button}>{name}</button>
}
export default Button;