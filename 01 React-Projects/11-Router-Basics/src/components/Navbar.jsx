import { Link } from "react-router-dom"
export default function Navbar () {
    return<header>
        <nav style={{ backgroundColor: 'lightblue', padding: '10px' , display: 'flex', justifyContent: 'space-between'}}>
            <ul>
                <li>
                    <Link to={'/'}> Home </Link>
                </li>
                 <li>
                    <Link to={'/products'}> Products </Link>
                </li>
                 <li>
                    <Link to={'/about'}> About </Link>
                </li>
            </ul>
        </nav>
    </header>
}