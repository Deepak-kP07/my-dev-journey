import { Link } from 'react-router';

// Individual Event Card Component
export function EventCard({ event }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            {event.category}
          </span>
        </div>
        {event.price === 0 && (
          <div className="absolute top-3 left-3">
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              FREE
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
          {event.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {event.description}
        </p>

        {/* Date and Time */}
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{formatDate(event.date)} at {formatTime(event.time)}</span>
        </div>

        {/* Location */}
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="truncate">{event.location}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {event.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
            >
              {tag}
            </span>
          ))}
          {event.tags.length > 3 && (
            <span className="text-gray-500 text-xs">+{event.tags.length - 3} more</span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-lg font-bold text-blue-600">
              {event.price === 0 ? 'Free' : `$${event.price}`}
            </span>
            <span className="text-sm text-gray-500 ml-2">
              {event.attendees} attending
            </span>
          </div>
          
          <Link 
            to={`/events/${event.id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
