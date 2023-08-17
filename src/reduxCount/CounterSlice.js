import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice=createSlice({
    initialState:20,
    name:'count',
    reducers:{
        increment:(state)=>state+1,
        decrement:(state)=>state-1,
        addamount:(state,action)=>state=state+action.payload,
        removeamount:(state,action)=>state=state-action.payload,
    },
    
})
export const {increment,decrement,addamount,removeamount}=CounterSlice.actions;
export default CounterSlice.reducer;