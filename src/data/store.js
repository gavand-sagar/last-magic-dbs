import { configureStore, createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: 'global',
    initialState: {
        currentUsername: 'Superman'
    },
    reducers: {
        changeCurrentUsername: (state, action) => {
            state.currentUsername = action.payload
        }
    }
});


export const {changeCurrentUsername} = globalSlice.actions

const productSlice = createSlice({
    name: 'product',
    initialState: {
        allProducts: []
    }
})
export const store = configureStore({
    reducer: {
        global: globalSlice.reducer,
        product: productSlice.reducer
    }
})