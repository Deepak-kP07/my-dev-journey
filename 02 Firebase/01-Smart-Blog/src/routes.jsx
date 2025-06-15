import { createBrowserRouter } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import RootLayout from "./root.jsx";
import HomePage from "./pages/Home";
import Profile from "./pages/Profile.jsx";
import LoginPage from "./pages/Login";
import NotFoundPage from "./pages/Error";
import ProtectedRoute from "./pages/ProtectedRoute";
import ManageAllPost from './components/ManageAllPost.jsx';
import CreateNewPost from './components/CreateNewPost.jsx';
import EditPost from "./components/EditPost.jsx";
const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage/> },
      { path: "/login", element: <LoginPage/> },
      //here we write our Protected Routes 
      { path:'/profile', 
        element : <ProtectedRoute >
          <Profile/>
        </ProtectedRoute> ,
        children : [
          { index: true, element: <Navigate to="manage" replace /> },
          { path : 'manage' , element: <ManageAllPost/>},
          {path : 'create' , element : <CreateNewPost/> },
          {path : 'edit/:postId' , element:<EditPost/> }

        ]
      } 
    ],
  },
]);

export default route;
