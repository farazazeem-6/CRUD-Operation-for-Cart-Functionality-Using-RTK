import { fetchProducts } from './productAPI';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const fetchAsyncProducts = createAsyncThunk(
    'product/fetchProducts',
    async () => {
        const response = await fetchProducts()
        return response.data
    }
)
const initialState = {
    products: [],
    status: 'idle'
}
export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncProducts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchAsyncProducts.fulfilled, (state, action) => {
                state.status = 'idle';
                state.products = action.payload

            })
            .addCase(fetchAsyncProducts.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.error.message;
            })
    }
})

export default productSlice.reducer
