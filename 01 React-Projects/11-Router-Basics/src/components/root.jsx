import { Outlet } from "react-router-dom" ;
import Navbar from "./Navbar" ;
export default function RootComponent(){
    return<>
        {/* <h2> rooot Layout </h2> */}
        <Navbar/>
        <Outlet/>
    </>
}