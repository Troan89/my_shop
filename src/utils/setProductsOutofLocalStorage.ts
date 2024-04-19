import {basketAction} from "../store/basketSlice";
import {AppThunkDispatch} from "../store/store";


export const setProductsOutOfLocalStorage = (dispatch:AppThunkDispatch) => {

    let productsLocalStorage = localStorage.getItem('basket')
    if(productsLocalStorage) {
        let newProducts = JSON.parse(productsLocalStorage)
        dispatch(basketAction.setProducts({products: newProducts}))
    }
}