// import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
const  initialState = { counter : 0 , showToggle : true}

const counterSlice  = createSlice({
    name : 'Counter',
    initialState :  initialState ,
    reducers : {
        // all my reducer functions here 
        increment(state){state.counter++},
        decrement(state){state.counter--},
        increase(state , action ){ state.counter +=action.payload},
        toggle(state){ state.showToggle = !state.showToggle;}
    }
})
const authIntialState = {  authIntialState : false}
const authSlice = createSlice({
    name : 'Auth' ,
    initialState :authIntialState ,
    reducers : {
        login (state){
            state.authIntialState = true
        },
        logout(state){
            state.authIntialState = false
        }
    } 
})

// function reducerFunction (state = { initialState}  , action){
//     if(action.type=== 'INCREMENT'){
//         return {
//             ...state ,
//             counter: state.counter + 1
//         };
//     }
//     if(action.type=== 'DECREMENT'){
       
//         return {
//              ...state,
//             counter: state.counter - 1
//         };
//     }
//     if(action.type === "increse"){
//         return {
//             ...state ,
//             counter : state.counter + action.payload 
//         };
//     }
//     if(action.type === "toggle"){
//         return{
//             ...state ,
//             showToggle : state.showToggle = !state.showToggle
//         }
//     }
//     return state;
// }

// const store = createStore(counterSlice.reducer);

const store = configureStore( {
    reducer : {
      counter : counterSlice.reducer,
      auth : authSlice.reducer
    }
})

export const  counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;