import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    show:false,
    msg:"",
    error:false
  }
export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    show: (state, action) => {
      state.msg = action.payload.msg
      state.error = action.payload.error
      state.show = true
    },
    hide: (state) => {
      state.show = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { show,hide} = notificationSlice.actions

export default notificationSlice.reducer