import { CartProductModel } from "@/types/productTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  products: CartProductModel[];
  total: number;
}

const initialState: CartState = {
  products: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      const productIndex = state.products.findIndex(
        (cartProduct) => cartProduct.product.id == action.payload
      );
      state.products[productIndex].quantity++;
    },
    decrement: (state, action: PayloadAction<number>) => {
      const productIndex = state.products.findIndex(
        (cartProduct) => cartProduct.product.id == action.payload
      );
      state.products[productIndex].quantity--;
    },
    addToCart: (state, action: PayloadAction<CartProductModel>) => {
      state.products.push(action.payload);
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      const productIndex = state.products.findIndex(
        (cartProduct) => cartProduct.product.id == action.payload
      );
      state.products.splice(productIndex, 1);
    },
  },
});

export const { increment, decrement, addToCart, deleteFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
