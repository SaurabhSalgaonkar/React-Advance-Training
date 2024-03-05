import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItem: (state, action) => {
            console.log("state", current(state));
            state.cartItems.push(action.payload)
        },
        clearItems: (state) => {
            state.cartItems.length = 0;
        }
    }
});

export default cartSlice.reducer;
export const { addItem, clearItems } = cartSlice.actions; 

