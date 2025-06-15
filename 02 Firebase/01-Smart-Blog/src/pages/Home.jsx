import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchpost } from "../features/post/postSlice"; // Corrected: Assuming thunk is fetchPosts
import PostCard from '../components/PostCard';

export default function HomePage() {
  const dispatch = useDispatch();

  // Select the necessary state from the Redux store
  // Make sure your slice is named 'post' in your store configuration
  const posts = useSelector((state) => state.posts.items);
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  // Fetch posts only when the component mounts and the status is 'idle'
  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchpost()); // Corrected: Dispatch the correct thunk name
    }
  }, [postStatus, dispatch]);

  // A variable to hold the content we will render
  let contentToDisplay;

  // Conditional rendering based on the status
  if (postStatus === 'loading') {
    contentToDisplay = <p className="text-center text-lg mt-8">Loading posts...</p>;
  } else if (postStatus === 'succeeded') {
    contentToDisplay = (
      // If there are no posts, show a message
      posts && posts.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            // Use the reusable PostCard component for each post
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 mt-8">No posts have been published yet.</p>
      )
    );
  } else if (postStatus === 'failed') {
    contentToDisplay = <p className="text-center text-red-500 mt-8">Error: {error}</p>;
  }

  // The main return statement for the whole page
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-5xl font-extrabold text-center mb-4">
        The Smart Blog
      </h1>
      <p className="text-center text-gray-400 text-lg mb-8">
        Thoughts and Experiments in Web Development
      </p>
      
      {/* Render the content determined by our logic above */}
      <div className="mt-8">
        {contentToDisplay}
      </div>
    </div>
  );
}

/***  
 <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">Welcome to the Public Blog</h1>
      <p className="mt-4">Everyone can see this page.</p>

      <div className="flex items-center mt-4">
        {user ? (
          // If user is logged in, show their info and a logout button
          <div className="flex items-center gap-4">
            <span className="font-medium">
              {user.displayName || user.email}
            </span>
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
            )}
            <button
              // onClick={handleSignOut}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-3 rounded-md"
            >
              Logout
            </button>
          </div>
        ) : (
          // If user is not logged in, show login/signup links
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Not logged in</span>
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-md"
            >
              Login
            </Link>
          </div>
        )}
      </div>

      <nav className="mt-8 space-x-4">
        <Link to="/admin" className="text-blue-400 hover:underline">
          Go to Admin Area (will require login)
        </Link>
        <Link to="/login" className="text-blue-400 hover:underline">
          Login Page
        </Link>
      </nav>

      { The list of blog posts will be rendered here later }
    </div>
***/
