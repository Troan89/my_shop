import logo from '../../../assets/logo.jpg'
import s from './Header.module.css'
import Basket from "../Basket/Basket";
import {NavLink} from "react-router-dom";
export const Header = () => {


    return (
        <div className={s.header}>
            <div className={s.logo}>
                <NavLink to={'/my_shop'}><img src={logo} alt={''}/></NavLink>
                Sport Short
            </div>
            <Basket />
        </div>
    )
}