import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    // If no user, redirect to the login page.
    return <Navigate to="/login" />;
  }

  // If there is a user, render the children (<AdminPage /> in our case).
  return children;
}

export default ProtectedRoute;