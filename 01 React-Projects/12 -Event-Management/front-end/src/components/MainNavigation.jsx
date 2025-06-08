import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => {
                return isActive
                  ? "text-blue-500 font-bold bg-blue-200 px-4 py-2 rounded "
                  : "text-gray-500 hover:bg-blue-50 px-4 py-2 rounded ";
              }}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/events"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold bg-blue-200 px-4 py-2 rounded "
                  : "text-gray-500 hover:bg-blue-50 px-4 py-2 rounded "
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold bg-blue-200 px-4 py-2 rounded "
                  : "text-gray-500 hover:bg-blue-50 px-4 py-2 rounded "
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
