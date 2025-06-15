import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user:null,
    status: 'idle' ,

}
export const authSlice = createSlice ( { 
    name : 'auth ',
    initialState ,
    reducers : {
        setUser : (state ,action)=>{
            state.user = action.payload ;
            state.status = 'authenticated'

        },
        clearUser : (state)=>{
            state.user = null ;
            state.status = 'unathenticated'
        },
        authLoading : (state)=>{
            state.status = 'loading';
        }
    }
})


export const { setUser , clearUser , authLoading } = authSlice.actions ; 
export default authSlice.reducer;