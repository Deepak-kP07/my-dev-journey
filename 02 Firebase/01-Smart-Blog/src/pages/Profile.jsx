// src/pages/Profile.jsx
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { auth } from '../firebase';

function Profile() {
  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-stone-100 rounded-lg p-6 mb-6">
          {/* <h1 className="text-2xl font-bold mb-4">Profile</h1> */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center">
              {/* <span className="text-xl font-bold">
                {auth.currentUser?.displayName?.charAt(0) || 'U'}
              </span> */}
              <img className='w-auto h-36 bg-stone-100 rounded-full' src={auth.currentUser.photoURL} alt={auth.currentUser.displayName} />
            </div>
            <div>
              <p className="text-lg font-semibold">
                {auth.currentUser?.displayName || 'User'}
              </p>
              <p className="text-gray-400">
                {auth.currentUser?.email}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className=" bg-stone-100 rounded-lg p-4 mb-6">
          <nav className="flex space-x-4">
            <NavLink 
              to="/profile/manage"
              className={({ isActive }) => 
                isActive 
                  ? 'px-4 py-2 bg-blue-400 text-white rounded-md' 
                  : 'px-4 py-2  bg-stone-50 text-gray-800 rounded-md hover:bg-gray-300'
              }
            >
              Manage All Posts
            </NavLink>
            <NavLink 
              to="/profile/create"
              className={({ isActive }) => 
                isActive 
                  ? 'px-4 py-2 bg-blue-400 text-white  rounded-md' 
                  : 'px-4 py-2  bg-stone-50 text-gray-800 rounded-md hover:bg-gray-300'
              }
            >
              Create New Post
            </NavLink>
          </nav>
        </div>

        {/* Content Area - This is where nested routes will render */}
        <div className=" bg-stone-100 rounded-lg p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Profile;