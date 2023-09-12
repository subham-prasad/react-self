import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice";

// const loggingMiddleware = store => next => action => {
//     console.log("Action:", action);
//     console.log("State before:", store.getState());
//     next(action);
//     console.log("State after:", store.getState());
//   };
  
const store = configureStore({
    
    reducer: {
        cart: cartSlice,
    },
    // middleware: [loggingMiddleware],
});

export default store;