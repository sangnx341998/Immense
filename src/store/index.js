import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer'
import thunk from 'redux-thunk'
import { createWrapper } from 'next-redux-wrapper'

export function createStore(options) {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: thunk,
    ...options
  })
}

export const store = createStore()

export const wrapper = createWrapper(store)
