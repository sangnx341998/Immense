import { combineReducers } from '@reduxjs/toolkit'
import productReducer from '../store/product/slice'

const rootReducer = combineReducers({
  products: productReducer
})

export default rootReducer
