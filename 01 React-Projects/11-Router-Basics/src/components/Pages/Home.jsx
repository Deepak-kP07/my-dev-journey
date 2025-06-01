import { Link } from "react-router-dom"
export default function Home(){
    return<>
    <h1> Home Page .. </h1>
    <h2> goto <Link to={'./products'}> Products </Link> page for just se the url chnage bro </h2>
    </>
}