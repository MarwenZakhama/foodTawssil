import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    foods: [],
    totalPrice:0,
    totalItem:0,
  }
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    empty:(state)=>{
      state.foods = []
      state.totalItem = 0
      state.totalPrice = 0
    },
    addFood: (state,payload) => {
      console.log(payload.payload);
      
      var price = payload.payload.food.size[0][payload.payload.foodDetails.size];
      
      var supsprice = 0;
      payload.payload.foodDetails.sup.map(s => payload.payload.food.sup[0][s]).forEach(ss => {
        supsprice += parseFloat(ss)
      });
      
      
      state.totalPrice += parseFloat(price)  + supsprice
      
      state.totalItem += 1
      var load = {...payload.payload}
      load.foodDetails.totalPrice = parseFloat(price)  + supsprice
      state.foods = state.foods.concat(load)
    },
    addQte: (state,payload) => {
      state.foods[payload.payload].foodDetails.qte += 1
      state.totalPrice += state.foods[payload.payload].foodDetails.totalPrice
    },
    subQte: (state,payload) => {
      if(state.foods[payload.payload].foodDetails.qte > 1 ){
        state.foods[payload.payload].foodDetails.qte -= 1
        state.totalPrice -= state.foods[payload.payload].foodDetails.totalPrice

      }
    },removeQte: (state,payload) => {
      state.totalItem -= 1
      state.totalPrice -= state.foods[payload.payload].foodDetails.totalPrice * state.foods[payload.payload].foodDetails.qte
      state.foods =  state.foods.filter((f,i) => i!=payload.payload )
      
      
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addFood, addQte, subQte,removeQte,empty } = cartSlice.actions

export default cartSlice.reducer