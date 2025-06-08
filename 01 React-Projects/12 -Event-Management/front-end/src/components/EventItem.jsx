import { Link } from "react-router";

function EventItem({ event }) {
  function startDeleteHandler() {
    // Handle delete logic here
  }

  return (
    <article className="max-w-3xl mx-auto my-8 text-center bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      
      <div className="p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {event.title}
        </h1>
        
        <time className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
          {event.date}
        </time>
        
        <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          {event.description}
        </p>
        
        <menu className="flex gap-4 justify-center items-center p-0 m-0 list-none">
          <Link 
            to="edit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Edit Event
          </Link>
          <button 
            onClick={startDeleteHandler}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Delete Event
          </button>
        </menu>
      </div>
    </article>
  );
}

export default EventItem;