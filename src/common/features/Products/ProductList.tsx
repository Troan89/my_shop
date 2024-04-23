import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../store/store";
import Product from "./product/Product";
import s from './ProductList.module.css'
import {setProductsOutOfLocalStorage} from "../../../utils/setProductsOutofLocalStorage";
import {Router} from "react-router-dom";

const ProductList = () => {

    const products = useAppSelector(state=> state.products)

    const dispatch = useAppDispatch()

    useEffect(()=>{
        setProductsOutOfLocalStorage(dispatch)
    }, [])

    return (
        <div className={s.productsList}>
            <div className={s.products}>
                {products.map(product=>{
                    return <Product key={product.id} product={product}/>
                })}
            </div>

        </div>
    );
};

export default ProductList;