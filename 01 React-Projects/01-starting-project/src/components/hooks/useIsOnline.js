import {useEffect, useState } from "react";
export default function useIsOnline(){
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    useEffect (()=>{
        //event Handlers 
        const handleOnline = () => setIsOnline(true); 
        const handleOffline = () => setIsOnline(false);

        // evennt Listers 
        window.addEventListener('online',handleOnline);
        window.addEventListener('offline',handleOffline);

        // Cleanup function
        return () =>{
            window.removeEventListener('online',handleOnline);
            window.removeEventListener('offline',handleOffline);
        }
    } , [])
    return isOnline;
}