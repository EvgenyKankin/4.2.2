import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type {Product} from '../components/ProductCard/ProductCard'
import type { RootState } from './store';

type ProductsState = {
  products: Product[];
  isLoading: boolean;
  error: string | null;
};

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: null,
};

export const selectProductsState = (state: RootState) => state.products;

export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { rejectValue: string }
>('products/fetchProducts', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json');

    if (!response.ok) {
      return rejectWithValue('Ошибка загрузки овощей');
    }

    return await response.json();
  } catch {
    return rejectWithValue('Ошибка сети');
  }
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? 'Неизвестная ошибка';
      });
  },
});

export default productsSlice.reducer;