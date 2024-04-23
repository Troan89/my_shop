import React from 'react';
import s from './Product.module.css'
import {Link, useNavigate} from "react-router-dom";
import {Button} from "@material-ui/core";

export type ProductType = {
    id: string
    title: string
    description: string
    price: number
    image: string
}
type Props = {
    product: ProductType
}

const Product = ({product}: Props) => {

    const {image, title, price, id} = product

    const navigate = useNavigate()

    const showMoreHandler = (id:string) => {
        navigate(`/product/${id}`)
    }

    return (
        <div className={s.product}>
            <img src={image}/>
            <div className={s.productTitle}>
                {title}
            </div>
            <div className={s.productPrice}>
                ${price}
            </div>
            <div>
                {/*<button onClick={()=>showMoreHandler(id)}>Show more</button>*/}
                <Button onClick={()=>showMoreHandler(id)} variant={'contained'} color={'info'}> Show more </Button>
            </div>
        </div>
    );
};

export default Product;