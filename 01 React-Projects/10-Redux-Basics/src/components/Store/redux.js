import { createStore } from 'redux';

// reducer function 
function reducerFunction (state= {count :0} , action){
    if(action.type=== "INCREMENT"){
        return {
            ...state,
            count : state.count + 1
        }
    }

    if(action.type=== "DECREMENT"){
        return {
            ...state,
            count : state.count - 1
        }
    }
    return state;
}

//centeral store for the application
const store  = createStore(reducerFunction) ;

export default store;

// // subdription to the store
// const counterSubscriber = () =>{
//     const letestState = store.getState();
//     console.log(letestState)
// }

// // subscribing to the store
// store.subcribe(counterSubscriber);

// // dispatching an action to the store
// store.dispatch({
//     type : "INCREMENT",
//     payload : 1
// })