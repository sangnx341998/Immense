import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import productApi from './api'

const initialState = {
  loading: false,
  products: []
}

export const fetchProduct = createAsyncThunk(
  'getProduct',
  async (data, { rejectWithValue }) => {
    try {
      const response = await productApi.getProduct(data)
      return response
    } catch (error) {
      rejectWithValue(error)
    }
  }
)

const productSlice = createSlice({
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products = [...state.products, action.payload]
    }
  },
  extraReducers: (build) =>
    build
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
      })
})

export const { addProducts } = productSlice.actions

export default productSlice.reducer
