import { createSlice } from "@reduxjs/toolkit";
                                              
const initialState={
  count:0,
  data:[]
};

const counterSlice=createSlice({
  name:'counter',
  initialState,
  reducers:{
    increment:(state)=>{
      state.count +=1;
    },
    decrement:(state)=>{
      state.count -=1;
    },
    addcart:(state,action)=>{
      let item=state.data.find((items)=>items.id===action.payload.id);
      if(item){
        item.quantity+=1;
      }
      else{
        state.data.push({...action.payload,quantity:1})
      }
    },
    plus:(state,action)=>{
      const item = state.data.find((items) => items.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    
    },
    minus:(state,action)=>{
      const item = state.data.find((items) => items.id === action.payload);
      if (item) {
        item.quantity -= 1;
      }
    }
    

  }
})
export const {increment,decrement,addcart,plus,minus}=counterSlice.actions;
export default counterSlice.reducer;
