import {createSlice} from "@reduxjs/toolkit";
import 'firebase/auth';
import 'firebase/firestore';
import {dataBase} from "./database";

const initialState = dataBase

const slice = createSlice({
    name: 'products',
    initialState,
    reducers: {}
})


export const productsSlice = slice.reducer
export const productsAction = slice.actions
