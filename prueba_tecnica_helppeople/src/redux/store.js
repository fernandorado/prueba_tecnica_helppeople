import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    slider: slideReducer,
    products: productsReducer,
    cart: cartReducer,
    user: authReducer,
  },
});
