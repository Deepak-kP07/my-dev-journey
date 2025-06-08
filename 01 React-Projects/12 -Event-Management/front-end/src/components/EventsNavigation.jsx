
import { NavLink } from 'react-router';
function EventsNavigation() {
  return (
    <header className="p-8 flex  justify-center " >
      <nav>
        <ul className='flex gap-4 text-stone-800'>
          <li>
            <NavLink to={"/events"}  className={({ isActive }) => {
                return isActive
                  ? "text-stone-700 font-bold bg-blue-200 px-4 py-2 rounded "
                  : "text-gray-700 hover:bg-blue-50 px-4 py-2 rounded ";
              }} end >All Events</NavLink>
          </li>
          <li>
            <NavLink to={"/events/new"}  className={({ isActive }) => {
                return isActive
                  ? "text-stone-700 font-bold bg-blue-200 px-4 py-2 rounded "
                  : "text-gray-500 hover:bg-blue-50 px-4 py-2 rounded ";
              }} >New Event</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
