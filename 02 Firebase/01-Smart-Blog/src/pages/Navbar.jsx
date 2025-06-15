import { signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { MdLogout } from 'react-icons/md';
import { useSelector } from "react-redux";
export default function Navbar() {


  const { user } = useSelector(state => state.auth);
 const navigate = useNavigate();
  function handleSIgnOut (){
    signOut(auth)
    .then(()=>{
      console.log("User signed out successfully.");
      navigate('/login');
    })
    .catch((err)=>{
      console.error("Sign-out Error:", err);
      
    })
  }
  return (
    <nav >
      <ul className="flex gap-10 justify-center p-4 bg-gray-600 text-stone-100 items-center">
        <li>
          {/* The home route is '/', not '/home' */}
          <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-blue-400 font-bold' : undefined}>
            Home
          </NavLink>
        </li>
        <li>
            {/* Let's make this an Admin link for our example */}
          <NavLink to={'/profile'} className={({ isActive }) => isActive ? 'text-blue-400 font-bold' : undefined}>
            Profile
          </NavLink>
        </li>
        <li>
          {/* <NavLink to={'/login'} className={({ isActive }) => isActive ? 'text-blue-400 font-bold' : undefined}>
            Login
          </NavLink> */}
        </li>
        <li>
          {/* <button onClick={handleSIgnOut} className="flex gap-2 items-center"> 
            <span>  SignOut  </span>
            <span> <MdLogout size={16} /></span>
          </button> */}

           <div className="flex items-center">
            {user ? (
              // If user is logged in, show their info and a logout button
              <div className="flex items-center gap-4">
                <span className="font-medium">{user.displayName || user.email}</span>
                {user.photoURL && (
                  <img 
                    src={user.photoURL} 
                    alt="Profile" 
                    className="w-10 h-10 rounded-full"
                  />
                )}
                <button 
                  onClick={handleSIgnOut}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-3 rounded-md"
                >
                  Logout
                </button>
              </div>
            ) : (
              // If user is not logged in, show a login link
              <NavLink to={'/login'} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                Login
              </NavLink>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
}