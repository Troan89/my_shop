import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductType} from "../common/features/Products/product/Product";

type Product = {
    id: string
    title: string
    description: string
    price: number
    image: string
    count:number
}
type InitialState = {
    products: Product[],
}

const slice = createSlice({
    name: 'basket',
    initialState: {products:[], totalPrice:0} as InitialState,
    reducers: {
        addProduct(state, action: PayloadAction<{product: ProductType }>){
            const newProduct = {...action.payload.product, count: 1}
            state.products.push(newProduct)
            localStorage.setItem('basket', JSON.stringify(state.products))
        },
        deleteProduct(state, action: PayloadAction<{productId:string}>){
            const product = state.products.find(pr => pr.id === action.payload.productId)
            if (product && product.count > 1) {
                product.count -= 1
            } else {
                state.products = state.products.filter(pr=>pr.id !== action.payload.productId)
            }
            localStorage.setItem('basket', JSON.stringify(state.products))
        },
        increaseCountProduct(state, action: PayloadAction<{productId:string}>){
            const index = state.products.findIndex(pr => pr.id === action.payload.productId)
            state.products[index].count += 1
            localStorage.setItem('basket', JSON.stringify(state.products))
        },
        setProducts(state, action: PayloadAction<{ products: Product[] }>){
            state.products = action.payload.products
        }
    }
})

// const addProduct = (id:string) => ({type: `${slice.name}`, payload: {id}})

export const basketSlice = slice.reducer
export const basketAction = slice.actions
