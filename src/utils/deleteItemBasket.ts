import {basketAction} from "../store/basketSlice";
import {AppThunkDispatch} from "../store/store";

export const deleteItemBasket = (productId: string, dispatch: AppThunkDispatch) => {
    return dispatch(basketAction.deleteProduct({productId}))
};

