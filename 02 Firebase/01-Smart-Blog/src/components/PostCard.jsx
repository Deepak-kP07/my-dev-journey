// src/components/PostCard.jsx

import React from 'react';

// This component receives the 'post' object and an optional 'actions' element.
function PostCard({ post, actions }) {
  // Defensive check: if for some reason a post is not passed, render nothing.
  if (!post) return null;

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col h-full transform hover:-translate-y-1 transition-transform duration-300">
      
      {/* Author Info Section */}
      <div className="flex items-center mb-4">
        <img
          src={post.photoURL || `https://ui-avatars.com/api/?name=${post.authorName || '?'}&background=random`}
          alt={post.authorName || 'Author'}
          className="w-10 h-10 rounded-full mr-4 border-2 border-gray-600"
        />
        <div>
          <h2 className="text-xl font-bold text-blue-400 leading-tight">
            {post.title}
          </h2>
          <p className="text-sm text-gray-400">by {post.authorName || 'Anonymous'}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-grow">
        <p className="text-gray-300 whitespace-pre-wrap">
          {/* Show a snippet of the content */}
          {post.content.substring(0, 120)}...
        </p>
      </div>
      
      {/* Actions Section (this will only render if 'actions' are passed in) */}
      {actions && (
        <div className="mt-6 pt-4 border-t border-gray-700">
          {actions}
        </div>
      )}

    </div>
  );
}

export default PostCard;