// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-8 inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
        Go Back Home
      </Link>
    </div>
  );
}
export default NotFoundPage;