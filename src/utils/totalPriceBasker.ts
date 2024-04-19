import {AppRootState} from "../store/store";

export const totalPrice = (state:AppRootState) => {
    const products = state.basket.products
    const price = products.reduce((acc,el)=>{
        return acc = acc + (el.price * el.count)
    }, 0)
    return price
}