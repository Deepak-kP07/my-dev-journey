import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchpost, deletePost } from "../features/post/postSlice";
import PostCard from "../components/PostCard";
import { toast } from "react-toastify";

const ConfirmDeleteToast = ({ closeToast, onConfirm, postId }) => (
  <div>
    <p className="font-semibold">Are you sure you want to delete this post?</p>
    <div className="flex justify-end gap-2 mt-3">
      <button 
        onClick={closeToast} 
        className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-1 px-3 text-xs rounded"
      >
        Cancel
      </button>
      <button 
        onClick={() => {
          onConfirm(postId);
          closeToast();
        }} 
        className="bg-red-600 hover:bg-red-500 text-white font-bold py-1 px-3 text-xs rounded"
      >
        Delete
      </button>
    </div>
  </div>
);

export default function ManageAllPost() {
  const dispatch = useDispatch();

  // 1. Select all necessary data from the Redux store
  const currentUser = useSelector((state) => state.auth.user);
  const allPosts = useSelector((state) => state.posts.items);
  const postStatus = useSelector((state) => state.posts.status);

  // 2. Fetch the posts when the component first loads, if they haven't been fetched already.
  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchpost());
    }
  }, [postStatus, dispatch]);

  // 3. Filter all posts to get only those belonging to the current user.
  //    The defensive (allPosts || []) pattern prevents crashes if allPosts is temporarily undefined.
  const myPosts = (allPosts || []).filter(
    (post) => post.authorId === currentUser?.uid
  );

  // 4. Define the handler function for the delete button.
  //    Your code here is perfect.
   const confirmAndDelete = (postId) => {
    dispatch(deletePost(postId))
      .unwrap()
      .then(() => toast.success("Post deleted!"))
      .catch(err => toast.error(`Deletion failed: ${err.message}`));
  };
  
  const handleDelete = (postId) => {
    toast.warn(
      <ConfirmDeleteToast onConfirm={confirmAndDelete} postId={postId} />, 
      {
        position: "top-center",
        autoClose: false, // Don't auto-close confirmations
        closeOnClick: false,
        draggable: false,
      }
    );
  };

  // --- UI Rendering Logic ---

  // Handle the loading state
  if (postStatus === "loading") {
    return (
      <div className="text-center p-10">
        <p className="text-lg text-gray-400">Loading your posts...</p>
      </div>
    );
  }

  // Handle the case where the user has no posts
  if (postStatus === "succeeded" && myPosts.length === 0) {
    return (
      <div className="text-center p-10 bg-gray-800 rounded-lg shadow-xl">
        <h3 className="text-2xl font-semibold">No Posts Found</h3>
        <p className="text-gray-400 mt-2">
          You haven't created any posts yet. Click the "Create New Post" tab to
          get started!
        </p>
      </div>
    );
  }
  
  // Render the list of posts
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {myPosts.map((post) => {
        // Define the action buttons for this specific post
        const actionButtons = (
          <div className="flex justify-end gap-3">
            <Link to={`../edit/${post.id}`}>
              <button className="bg-indigo-500 text-white font-semibold py-2 px-4 text-xs rounded-lg hover:bg-indigo-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75">
                Edit
              </button>
            </Link>

            <button
              onClick={() => handleDelete(post.id)}
              className="bg-red-500 text-white font-semibold py-2 px-4 text-xs rounded-lg hover:bg-red-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
            >
              Delete
            </button>
          </div>
        );

        return (
          // Use the PostCard component and pass the buttons to the 'actions' prop
          <PostCard key={post.id} post={post} actions={actionButtons} />
        );
      })}
    </div>
  );
}
