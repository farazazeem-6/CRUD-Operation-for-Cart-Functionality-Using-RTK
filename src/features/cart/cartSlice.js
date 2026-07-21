import { fetchItems, addItems, deleteItems } from './cartAPI';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAsyncItems = createAsyncThunk(
  'cart/fetchItems',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchItems();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch cart items');
    }
  }
);

export const addAsyncItems = createAsyncThunk(
  'cart/addItems',
  async (item, { rejectWithValue }) => {
    try {
      const response = await addItems(item);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to add item');
    }
  }
);

export const deleteAsyncItems = createAsyncThunk(
  'cart/deleteItems',
  async (id, { rejectWithValue }) => {
    try {
      await deleteItems(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete item');
    }
  }
);

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Items
      .addCase(fetchAsyncItems.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchAsyncItems.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchAsyncItems.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload || 'An error occurred';
      })
      // Add Items
      .addCase(addAsyncItems.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(addAsyncItems.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items.push(action.payload);
        state.error = null;
      })
      .addCase(addAsyncItems.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload || 'Failed to add item';
      })
      // Delete Items
      .addCase(deleteAsyncItems.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(deleteAsyncItems.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex((item) => item.id === action.payload);
        if (index !== -1) {
          state.items.splice(index, 1);
        }
        state.error = null;
      })
      .addCase(deleteAsyncItems.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload || 'Failed to delete item';
      });
  },
});

export const { clearError } = cartSlice.actions;
export default cartSlice.reducer;
