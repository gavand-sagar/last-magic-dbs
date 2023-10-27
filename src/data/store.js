import { configureStore, createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name:'global',
    initialState: {
        currentUsername:'Superman'
    }
})
const productSlice = createSlice({
    name:'product',
    initialState: {
        allProducts:[]
    }
})
export const store = configureStore({
    reducer:{
        global: globalSlice.reducer,
        product: productSlice.reducer
    }
})