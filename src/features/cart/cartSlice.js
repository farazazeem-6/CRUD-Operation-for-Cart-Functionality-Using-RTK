import { fetchItems, addItems } from './cartAPI';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const fetchAsyncItems = createAsyncThunk(
    'cart/fetchItems',
    async () => {
        const response = await fetchItems()
        return response.data
    }
)
export const addAsyncItems = createAsyncThunk(
    'cart/addItems',
    async (item) => {
        const response = await addItems(item)
        return response.data
    }
)
export const updateAsyncItems = createAsyncThunk(
    'cart/updateItems',
    async (id, updateItem) => {
        const response = await updateItems(id, updateItem)
        return response.data
    }
)
export const deleteAsyncItems = createAsyncThunk(
    'cart/deleteItems',
    async (id) => {
        const response = await deleteItems(id)
        return response.data
    }
)
const initialState = {
    items: [],
    status: 'idle'
}
export const cartSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncItems.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchAsyncItems.fulfilled, (state, action) => {
                state.status = 'idle';
                state.items = action.payload

            })
            .addCase(fetchAsyncItems.rejected, (state, action) => {
                state.status = 'error';
            })
            .addCase(addAsyncItems.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(addAsyncItems.fulfilled, (state, action) => {
                state.status = 'idle'
                state.items.push(action.payload)
            })
            .addCase(addAsyncItems.rejected, (state) => {
                state.status = 'error'
            })
            .addCase(updateAsyncItems.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(updateAsyncItems.fulfilled, (state, action) => {
                state.status = 'idle'
                state.items.push(action.payload)
            })
            .addCase(updateAsyncItems.rejected, (state) => {
                state.status = 'error'
            })
            .addCase(deleteAsyncItems.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(deleteAsyncItems.fulfilled, (state, action) => {
                state.status = 'idle'
                state.items.push(action.payload)
            })
            .addCase(deleteAsyncItems.rejected, (state) => {
                state.status = 'error'
            })
    }
})

export default cartSlice.reducer
