// src/pages/CreateNewPost.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../features/post/postSlice';
import { toast } from 'react-toastify';

function CreateNewPost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // State for form inputs
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCreatePost = (e) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
       toast.warn('Title and content cannot be empty.');
      return;
    }
    
    setIsLoading(true);
    
    dispatch(createPost({ title, content }))
      .unwrap()
      .then(() => {
        toast.success('Post created successfully!');
        setTitle('');
        setContent('');
        navigate('/');
      })
      .catch((error) => {
        // console.error('Failed to create post:', error);
         toast.error(`Failed to create post: ${error.message}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className='bg-stone-100' >
      <h2 className="text-2xl font-bold mb-6">Create a New Post</h2>
      
      <form onSubmit={handleCreatePost} className="space-y-4 ">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            Post Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3  bg-stone-200  rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            placeholder='Enter the tite of your Blog '
          />
        </div>
        
        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-2 ">
            Content
          </label>
          <textarea
            id="content"
            rows="5"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3  bg-stone-200 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
             placeholder='Enter the description of your Blog... '
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-3 px-6 rounded-md transition duration-200"
        >
          {isLoading ? 'Publishing...' : 'Publish Post'}
        </button>
      </form>
    </div>
  );
}

export default CreateNewPost;