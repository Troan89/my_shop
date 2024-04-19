import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../store/store";
import s from './BasketPage.module.css'
import {setProductsOutOfLocalStorage} from "../../../utils/setProductsOutofLocalStorage";
import {basketAction} from "../../../store/basketSlice";
import {useSelector} from "react-redux";
import {totalPrice} from "../../../utils/totalPriceBasker";
import {useFormik} from "formik";
import {Button} from "@material-ui/core";
import {Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import * as Yup from 'yup';
import {useNavigate} from "react-router-dom";
import {deleteItemBasket} from "../../../utils/deleteItemBasket";

const BasketPage = () => {

    const dispatch = useAppDispatch()

    const price = useSelector(totalPrice)

    const productsBasket = useAppSelector(state => state.basket.products)

    useEffect(() => {
        setProductsOutOfLocalStorage(dispatch)
    }, [])

    const deleteProductHandler = (productId: string) => {
        deleteItemBasket(productId, dispatch)
    }
    const addItemHandler = (productId: string) => {
        dispatch(basketAction.increaseCountProduct({productId}))
    }

    const validationForm = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Минимум 3 символа')
            .required('Required'),
        surname: Yup.string()
            .min(3, 'Минимум 3 символа')
            .required('Required'),
        patronymic: Yup.string()
            .min(3, 'Минимум 3 символа')
            .required('Required'),
        address: Yup.string()
            .min(10, 'Минимум 10 символа')
            .required('Required'),
    })

    const formik = useFormik({
        initialValues: {
            surname: '',
            name: '',
            patronymic: '',
            address: '',
            cardCourier: false,
            online: false
        },
        validationSchema: validationForm,
        onSubmit: (values, formikHelpers) => {
            const result = JSON.stringify({basket: [...productsBasket], values})
            console.log(result)
        }
    })

    function truncateText(text: string, maxLength: number) {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    }
    const navigate = useNavigate()


    return (
        <>
            <div className={s.basket}>
                <div>
                    {productsBasket.length > 0 ? productsBasket.map(product => {
                        let longText = product.description
                        let truncatedText = truncateText(longText, 150);
                        return (
                            <div className={s.product} key={product.id}>
                                <img src={product.image}/>
                                <div className={s.description} onClick={()=>{navigate(`/product/${product.id}`)}}>{truncatedText}</div>
                                <div className={s.count}>
                                    <Button onClick={() => deleteProductHandler(product.id)} variant={'contained'}
                                            color={'success'}> - </Button>
                                    <div>
                                        {product.count}
                                    </div>
                                    <Button onClick={() => addItemHandler(product.id)} variant={'contained'}
                                            color={'success'}> + </Button>
                                </div>
                            </div>
                        )
                    })
                        : <div className={s.product}> </div>
                    }
                    <div>
                        TOTAL: {price}$
                    </div>
                </div>


                <div className={s.form}>
                    <form onSubmit={formik.handleSubmit}>
                        <FormGroup>
                            <TextField label={"Фамилия"} margin={"normal"} {...formik.getFieldProps('surname')}/>
                            {formik.errors.surname && <div style={{color: 'red'}}>{formik.errors.surname}</div>}
                            <TextField label={"Имя"} margin={"normal"}
                                       {...formik.getFieldProps('name')}/>
                            {formik.errors.name && <div style={{color: 'red'}}>{formik.errors.name}</div>}
                            <TextField label={"Отчество"} margin={"normal"}
                                       {...formik.getFieldProps('patronymic')}/>
                            {formik.errors.patronymic && <div style={{color: 'red'}}>{formik.errors.patronymic}</div>}
                            <TextField label={"Адрес"} margin={"normal"}
                                       {...formik.getFieldProps('address')}/>
                            {formik.errors.address && <div style={{color: 'red'}}>{formik.errors.address}</div>}
                            <FormControlLabel
                                control={<Checkbox {...formik.getFieldProps('cardCourier')}
                                                   checked={formik.values.cardCourier}
                                disabled={formik.values.online}/>}
                                label={"Картой курьеру"}/>
                            <FormControlLabel
                                control={<Checkbox {...formik.getFieldProps('online')}
                                                   checked={formik.values.online}
                                                   disabled={formik.values.cardCourier}/>}
                                label={"Картой онлайн"}/>
                            <Button type={"submit"} variant={"contained"} color={"primary"}>Оформить заказ</Button>
                        </FormGroup>
                    </form>
                </div>
            </div>

        </>
    );
};

export default BasketPage;