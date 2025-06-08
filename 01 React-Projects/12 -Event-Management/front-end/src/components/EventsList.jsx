
import { Link  } from "react-router";
 function EventsList({ events }) {
  return (
    <div className="mx-auto mt-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">All Events</h1>
      <ul className="flex flex-col gap-4 ">
        {events.map((event) => (
          <li key={event.id}>
            <Link 
              to={event.id}
              className="flex bg-gray-700 rounded overflow-hidden no-underline text-white hover:scale-[1.02] hover:bg-gray-700 transition-transform"
            >
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-1/3 object-cover"
              />
              <div className="p-4">
                <h2 className="m-0 mb-4 font-bold text-xl">{event.title}</h2>
                <time className="text-stone-400">{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;