import {basketAction} from "../store/basketSlice";
import {Dispatch} from "@reduxjs/toolkit";
import {AppThunkDispatch} from "../store/store";

export const addItemBasket = (productId: string, dispatch: AppThunkDispatch) => {
    return dispatch(basketAction.increaseCountProduct({productId}))
};

