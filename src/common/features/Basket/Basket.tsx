import React, {useEffect} from 'react';
import basket from "../../../assets/basket.jpg";
import s from './Basket.module.css'
import {useSelector} from "react-redux";
import {totalPrice} from "../../../utils/totalPriceBasker";
import {NavLink} from "react-router-dom";

type Props = {}
const Basket = ({}:Props) => {

    const price = useSelector(totalPrice)

    return (
        <div className={s.basket}>
            <div>
                <NavLink to={'/basket'}><img src={basket}/></NavLink>
            </div>
            <div className={s.price}>
                ${price}
            </div>
        </div>
    );
};

export default Basket;