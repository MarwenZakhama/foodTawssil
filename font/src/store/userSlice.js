import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    user: {},
  }
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userlogin: (state, action) => {
      state.user = action.payload
    },
    userregister: (state, action) =>{
      state.user = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { userlogin} = userSlice.actions
export const { userregister} = userSlice.actions

export default userSlice.reducer