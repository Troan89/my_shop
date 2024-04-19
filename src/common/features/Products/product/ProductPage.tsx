import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import back from '../../../../assets/arrowBack.svg'
import {useAppDispatch, useAppSelector} from "../../../../store/store";
import s from './ProductPage.module.css'
import {basketAction} from "../../../../store/basketSlice";
import {setProductsOutOfLocalStorage} from "../../../../utils/setProductsOutofLocalStorage";
import {deleteItemBasket} from "../../../../utils/deleteItemBasket";
import {addItemBasket} from "../../../../utils/addItemBasket";

const ProductPage = () => {

    let {productId} = useParams()

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const [isProductInBasket, setIsProductInBasket] = useState(false)

    const products = useAppSelector(state => state.products)
    const productsBasket = useAppSelector(state => state.basket.products)

    const product = products.find(prod => prod.id === productId)
    const productBasket = productsBasket.find(prod => prod.id === productId)

    const addProductToBasketHandler = () => {
        setIsProductInBasket(true)
        if (product && !isProductInBasket) {
            dispatch(basketAction.addProduct({product}))
        }
    }
    const deleteCount = async () => {
        if (productBasket) {
            await deleteItemBasket(productBasket.id, dispatch)
            if (productBasket.count) {
                setIsProductInBasket(false)
            }
        }
    }

    const addCount = () => {
        if (productBasket) {
            addItemBasket(productBasket.id, dispatch)
        }
    }

    useEffect(() => {
        setProductsOutOfLocalStorage(dispatch)
    }, [])

    const navigateBasket = () => {
        navigate('/basket')
    }

    if (!isProductInBasket && productBasket) {
        setIsProductInBasket(true)
    }

    return (
        <div>
            <div>
                <Link to={"/"}>
                    <img src={back} alt=""/>
                    Back
                </Link>
                {
                    product === undefined ?
                        <h2>Loading...</h2> :
                        <div className={s.product}>
                            <img src={product.image} alt=""/>
                            <div className={s.info}>
                                <p className={s.title}>{product.title}</p>
                                <p className={s.price}>$ {product.price}</p>
                                <p className={s.description}>{product.description}</p>
                                {!isProductInBasket
                                    ? <button onClick={addProductToBasketHandler} className={s.baseButton}>Добавить в корзину</button>
                                    : <button onClick={navigateBasket} className={s.baseButton}>Перейти в корзину</button>}
                                {isProductInBasket &&
                                    <button  className={s.baseButton}>
                                            <button onClick={deleteCount} className={s.buttonCounter}> - </button>
                                             {productBasket && productBasket.count}
                                            <button onClick={addCount} className={s.buttonCounter}> + </button>
                                    </button>}
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default ProductPage;