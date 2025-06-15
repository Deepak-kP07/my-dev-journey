// src/pages/LoginPage.jsx

import React, { useState, useEffect } from 'react';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase'; // Your configured firebase auth instance
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GoogleIcon } from '../UI/GoogleIcon';
function LoginPage() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

 
  const navigate = useNavigate();

  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    if (user) {
      navigate('/profile');
    }
  }, [user, navigate]);

  let data ;
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const fd = new FormData(e.target)
    data = Object.fromEntries(fd.entries())


    try {
      // Use the Firebase function to sign in
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      

      console.log('Login Successful:', userCredential.user.email);

    } catch (err) {
      // Handle Firebase-specific errors for better UX
      let errorMessage = "Failed to log in. Please check your credentials.";
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        errorMessage = "Invalid email or password.";
      } else if (err.code === 'auth/invalid-email') {
        errorMessage = "Please enter a valid email address.";
      }
      setError(errorMessage);
      console.error("Login Error:", err.code, err.message);
    } finally {
      setLoading(false);
    }
  };


  //  GOOGLE auth 
  async function handleGoogleSignIn (){
    setLoading(true);
    setError(null);

    const Provider = new GoogleAuthProvider();

    try{
      await signInWithPopup(auth,Provider);
      console.log('sucsessfully logined With google')
    }catch(err){
      console.error(err.code);
      setError("Failed to sign in with Google. Please try again.");
    }finally{
      setLoading(false);
    } 
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-lg shadow-lg">
        <div>
          <h2 className="text-3xl font-extrabold text-center text-white">
            Profile Login
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full p-3 text-white bg-gray-700 border border-gray-600 rounded-t-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email address"
                // value={data ? data.email : ''}
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full p-3 text-white bg-gray-700 border border-gray-600 rounded-b-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
                // value={data.password}
               
              />
            </div>
          </div>

          {error && (
            <div className="p-3 text-sm text-center text-red-300 bg-red-800 bg-opacity-50 rounded-md">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>

          </div>
           <div className="relative flex py-3 items-center">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="flex-shrink mx-4 text-gray-400">Or continue with</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>
         <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-600 text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white disabled:opacity-50"
        >
          <GoogleIcon />
          <span>Sign in with Google</span>
        </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;