import { CartProductModel, ProductModel } from "@/types/productTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  products: CartProductModel[];
  total: number;
  drawerWidth: number;
  drawer: boolean;
}

const initialState: CartState = {
  products: [],
  total: 0,
  drawerWidth: 400,
  drawer: false,
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
    addToCart: (state, action: PayloadAction<ProductModel>) => {
      const productIndex = state.products.findIndex(
        (cartProduct) => cartProduct.product.id == action.payload.id
      );
      productIndex > -1
        ? state.products[productIndex].quantity++
        : state.products.push({ product: action.payload, quantity: 1 });
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      const productIndex = state.products.findIndex(
        (cartProduct) => cartProduct.product.id == action.payload
      );
      state.products.splice(productIndex, 1);
    },
    setDrawerWidth: (state, action: PayloadAction<number>) => {
      state.drawerWidth = action.payload;
    },
    toggleDrawer: (state) => {
      state.drawer = !state.drawer;
    },
  },
});

export const {
  increment,
  decrement,
  addToCart,
  deleteFromCart,
  setDrawerWidth,
  toggleDrawer,
} = cartSlice.actions;

export default cartSlice.reducer;
