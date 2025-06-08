import EventForm from "../components/EventForm";
import { useRouteLoaderData, useNavigate } from "react-router";

export default function EditEvent() {
    const data = useRouteLoaderData('event-details');
    const navigate = useNavigate();

    // Handle loading state or missing data
    if (!data) {
        return (
            <div className="max-w-2xl mx-auto my-8 p-8 text-center">
                <div className="animate-pulse">
                    <div className="h-8 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                </div>
                <p className="text-gray-600 mt-4">Loading event data...</p>
            </div>
        );
    }

    // Handle error state when event data is missing
    if (!data.event) {
        return (
            <div className="max-w-2xl mx-auto my-8 p-8 text-center bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
                <p className="text-gray-600 mb-4">Event data could not be loaded.</p>
                <button 
                    onClick={() => navigate('/events')}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                    Back to Events
                </button>
            </div>
        );
    }

    return (
        <>
            <div className="max-w-2xl mx-auto mb-4">
                <h1 className="text-3xl font-bold text-gray-800 text-center">
                    Edit Event
                </h1>
            </div>
            <EventForm event={data.event} />
        </>
    );
}