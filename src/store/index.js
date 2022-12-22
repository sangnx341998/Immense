

const configureStore = require('@reduxjs/toolkit').configureStore

const store = configureStore({
    reducer: rootReducer
})