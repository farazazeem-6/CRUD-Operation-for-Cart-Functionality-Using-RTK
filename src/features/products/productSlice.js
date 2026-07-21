import { fetchProducts } from './productAPI';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAsyncProducts = createAsyncThunk(
  'product/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchProducts();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch products');
    }
  }
);

const initialState = {
  products: [],
  status: 'idle',
  error: null,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchAsyncProducts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
        state.error = null;
      })
      .addCase(fetchAsyncProducts.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload || 'An error occurred';
      });
  },
});

export const { clearError } = productSlice.actions;
export default productSlice.reducer;
