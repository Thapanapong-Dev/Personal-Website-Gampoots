import { configureStore } from '@reduxjs/toolkit'
import pageReducer from './service/pageSlice'

export const store = configureStore({
  reducer: {
    page: pageReducer,
  },
})