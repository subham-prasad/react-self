import { createSlice } from "@reduxjs/toolkit";

const cartSlice =  createSlice({
    name: 'cart',
    initialState:{
        items: []
    },
    
    reducers: {
        addItem: (state,action) =>{
            if (action.payload !== null && action.payload !== undefined) {
                console.log(action.payload);
                state.items.push(action.payload);
              }
            
        },

        clearCart: (state) =>{
            state.items = [];
        },

        // removeItem: (state,action) =>{
        //     state.items.pop();
        // }
    }
});

export const {addItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;