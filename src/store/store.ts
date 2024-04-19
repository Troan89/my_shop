import {AnyAction, configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {productsSlice} from "./productSlice";
import {basketSlice} from "./basketSlice";

export const store = configureStore({
    reducer: {
        products: productsSlice,
        basket: basketSlice
    }
})

export type AppRootState = ReturnType<typeof store.getState>

// export type useAppDispatch = ReturnType<typeof store.dispatch>;

export type AppThunkDispatch = ThunkDispatch<AppRootState, any, AnyAction>
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector

// @ts-ignore
window.store = store