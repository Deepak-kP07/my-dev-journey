// import { useParams } from "react-router"
import EventItem from "../components/EventItem";
import { useRouteLoaderData  } from "react-router";
// import { useRouteLoaderData  } from "react-router";
export default function EventDetails(){
    const data = useRouteLoaderData('event-deatils');
    // const dynamicPath = useParams();
    
    return (
        <EventItem event={data.event}/>
        // <div className="bg-blue-50 h-screen">
        //    <div className="border w-1/3 rounded-xl p-12 bg-blue-300  mx-auto ">
        //      <h2 className="font-bold capitalize text-center text-xl pb-10 ">Event Details Page ..</h2>
        //     <p>Event ID: {dynamicPath.eventId}</p>
        //     <pre>{JSON.stringify(dynamicPath, null, 2)}</pre>
        //    </div>
        // </div>
    );
}

export async function loader ({ request , params}){
    const id = params.eventId;
 const response = await fetch('http://localhost:8080/events/' + id);
//  const data = await response.json();
 if(!response.ok){
    throw new Error ( {message:'could not fetch the data '} , {status : 500})
 }else{
    const data = await response.json();
    return data ; 
 }
}