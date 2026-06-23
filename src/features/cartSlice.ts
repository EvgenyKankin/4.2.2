import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../components/ProductCard/ProductCard';
import type { RootState } from './store';

export type CartItem = Product & { quantity: number };

type CartState = {
  cart: CartItem[];
};

const initialState: CartState = {
  cart: JSON.parse(localStorage.getItem('cart') || '[]'),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ product: Product; quantity: number }>
    ) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.product.id
      );

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.cart.push({
          ...action.payload.product,
          quantity: action.payload.quantity,
        });
      }
    },

    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.id === action.payload);

      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.id === action.payload);

      if (item) {
        item.quantity -= 1;
      }

      state.cart = state.cart.filter((item) => item.quantity > 0);
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.cart;

export const selectTotalItems = (state: RootState) =>
  state.cart.cart.length;

export default cartSlice.reducer;