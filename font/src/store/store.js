import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import userSlice from './userSlice'
import notificationSlice from './notificationSlice'
export const store = configureStore({
  reducer: {
    'cart':cartSlice,
    'user':userSlice,
    'noti':notificationSlice
  },
})