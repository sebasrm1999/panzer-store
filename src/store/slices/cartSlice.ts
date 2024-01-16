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
    updateQuantity: (state, action: PayloadAction<CartProductModel>) => {
      const productIndex = state.products.findIndex(
        (cartProduct) => cartProduct.product.id == action.payload.product.id
      );
      const prevSubtotal =
        state.products[productIndex].quantity *
        parseFloat(action.payload.product.price);
      state.total -= prevSubtotal;
      state.products[productIndex].quantity = action.payload.quantity;
      const newSubtotal =
        action.payload.quantity * parseFloat(action.payload.product.price);
      state.total += newSubtotal;
    },
    addToCart: (state, action: PayloadAction<ProductModel>) => {
      const productIndex = state.products.findIndex(
        (cartProduct) => cartProduct.product.id == action.payload.id
      );
      productIndex > -1
        ? state.products[productIndex].quantity++
        : state.products.push({ product: action.payload, quantity: 1 });
      state.total += parseFloat(action.payload.price);
    },
    deleteFromCart: (state, action: PayloadAction<ProductModel>) => {
      const productIndex = state.products.findIndex(
        (cartProduct) => cartProduct.product.id == action.payload.id
      );
      state.products.splice(productIndex, 1);
      state.total -= parseFloat(action.payload.price);
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
  updateQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
