import {configureStore } from '@reduxjs/toolkit';

// we have to import the slices 
// reducer -> store -> components 

import authReducer from '../features/auth/authSlice';
// import postReducer from '../firebase/post/postSlice';
import postReducer from '../features/post/postSlice'
import counterReducer from '../features/counter/counter' ;
export  const store = configureStore({
    reducer : {
        auth : authReducer ,
        posts : postReducer ,
        counter : counterReducer ,
    },
    middleware : (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: false,
    }),
});
