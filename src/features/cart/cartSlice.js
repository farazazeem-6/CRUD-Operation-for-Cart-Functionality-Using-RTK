import { fetchItems, addItems, updateItems, deleteItems } from './cartAPI';
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
        const response = await addItems()
        return response.data
    }
)
// export const updateAsyncItems = createAsyncThunk(
//     'cart/updateItems',
//     async () => {
//         const response = await updateItems()
//         return response.data
//     }
// )
// export const deleteAsyncItems = createAsyncThunk(
//     'cart/deleteItems',
//     async () => {
//         const response = await deleteItems()
//         return response.data
//     }
// )
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
            .addCase(addAsyncItems.fulfilled, (state, action) => {
                state.status = 'idle'
                state.items.push(action.payload)
            })
    }
})

export default cartSlice.reducer
