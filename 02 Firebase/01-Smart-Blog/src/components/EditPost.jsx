// src/pages/EditPostPage.jsx

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { editPost } from '../features/post/postSlice';
import {toast} from 'react-toastify'

function EditPost() {
  // HOOKS to get necessary tools
  const { postId } = useParams(); // Gets the ':postId' from the URL
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Find the post we want to edit from the Redux store
  const postToEdit = useSelector(state =>
    state.posts.items.find(p => p.id === postId)
  );

  // Local state for the form fields
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // This special hook runs when the component loads OR when 'postToEdit' is found.
  // It pre-fills the form with the existing data.
  useEffect(() => {
    if (postToEdit) {
      setTitle(postToEdit.title);
      setContent(postToEdit.content);
    }
  }, [postToEdit]);

  // The function to run when the "Save Changes" button is clicked
  const handleUpdatePost = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
        toast.warn('Title and content cannot be empty.')
    //   alert('Title and content cannot be empty.');
      return;
    }
    setIsLoading(true);

    // Dispatch our new updatePost action
    dispatch(editPost({ id: postId, title, content }))
      .unwrap()
      .then(() => {
        toast.success('Post updated successfully!')
        navigate('/profile/manage'); // Go back to the list of posts
      })
      .catch(error => {
        toast.error(`Failed to update post: ${error.message}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Show a loading message if the user gets to this page before the posts are loaded
  if (!postToEdit) {
    return (
      <div className="text-center p-10">
        <p>Loading Post Data...</p>
      </div>
    );
  }

  // The Form JSX (looks very similar to your CreatePostForm)
  return (
    <div className="container mx-auto p-8 max-w-2xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Edit Post</h1>
      <form onSubmit={handleUpdatePost} className="bg-gray-800 p-8 rounded-lg shadow-xl space-y-6">
        <div>
          <label htmlFor="title" className="block text-lg font-medium text-gray-300 mb-2">
            Post Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 bg-stone-200 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-lg font-medium text-gray-300 mb-2">
            Content
          </label>
          <textarea
            id="content"
            rows="12"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 bg-stone-200 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:bg-gray-500 transition-colors"
          >
            {isLoading ? 'Saving Changes...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditPost;