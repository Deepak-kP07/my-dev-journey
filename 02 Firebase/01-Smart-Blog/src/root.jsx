import Navbar from "./pages/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//, useSelector
import { useDispatch  } from "react-redux";
import { setUser , clearUser , authLoading } from "./features/auth/authSlice";
import { onAuthStateChanged } from 'firebase/auth' ;
import {auth} from './firebase'
import { Children, useEffect } from "react";

export default function RootLayout() {

    const dispatch  = useDispatch();
//   const status = useSelector((state)=>state.auth.status);

  useEffect( ()=>{

    dispatch(authLoading());

    const unsubscribe = onAuthStateChanged ( auth , (firebaseUser)=>{
      if(firebaseUser){
        console.log("Firebase reported a user:", firebaseUser.email);
        dispatch(setUser({
          uid : firebaseUser.uid ,
          email : firebaseUser.email,
          name : firebaseUser.displayName,
          photo : firebaseUser.photoURL,
          Phone_number : firebaseUser.phoneNumber
        }))
      }else{
        console.log("Firebase reported no user.");
        dispatch(clearUser());
      }
    });
    return unsubscribe ;
  } , [dispatch])

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
        <ToastContainer
        position="top-right" // Where the toasts will appear
        autoClose={5000}     // Auto-close after 5 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"         // Use the dark theme to match our app
      />
    </>
  );
}
