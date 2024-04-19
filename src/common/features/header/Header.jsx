import logo from '../../../assets/logo.jpg'
import s from './Header.module.css'
import Basket from "../Basket/Basket";
import {NavLink} from "react-router-dom";
export const Header = () => {


    return (
        <div className={s.header}>
            <NavLink to={'/'}><img src={logo} alt={''}/></NavLink>
            <Basket />
        </div>
    )
}