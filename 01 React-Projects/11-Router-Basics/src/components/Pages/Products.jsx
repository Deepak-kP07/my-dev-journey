
import { PRODUCTS } from "../../data";
import ProductCard from "../ProductCard.jsx";
export default function Products(){
    return<>
    <h1> Products page ... </h1>
    {/* <p> goto  <Link to={'/'}> Home </Link></p> */}
    <ul style={{listStyleType: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
        {
            PRODUCTS.map( (prod) => {
                return<li key={prod.id}>
                        <ProductCard product = {prod}/>
                    </li>
            })
        }
    </ul>
    </>
}