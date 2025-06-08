// import DUMMY_EVENTS from '../data';
// import { EventCard } from '../components/EventCard';

// export default function Event() {
//  return (
//    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
//        {DUMMY_EVENTS.map((event) => (
//          <div
//            key={event.id}
//            className="group animate-fade-in-up"
//          >
//            <div className="transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
//              <EventCard event={event} />
//            </div>
//          </div>
//        ))}
//      </div>
//    </div>
//  );
// }

import { useLoaderData } from "react-router";
import EventsList from "../components/EventsList";

function EventsPage() {
  const eventData = useLoaderData();
  return <>{<EventsList events={eventData} />}</>;
}

export default EventsPage;

export async function loaderData() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
