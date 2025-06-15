import { createSlice } from "@reduxjs/toolkit";


//it has to be in obeject format 
const initialState = {
    num : 0 ,
}

const counterSlice = createSlice (
    {
        name :'conuter ',
        initialState ,
        reducers : {
            //here goes the atully funtions 
            increment : (state) => {state.num+=1},
            decrement  : (state) => {state.num -=1},
            reset : (state)=>{state.num = 0},
            addCustomValue : (state,action) => { state.num += Number(action.payload) }
        }
    }
)
export const { increment , decrement ,reset , addCustomValue} = counterSlice.actions ;
export default counterSlice.reducer;