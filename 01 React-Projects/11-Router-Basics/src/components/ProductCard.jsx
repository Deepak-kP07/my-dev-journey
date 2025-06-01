import { Link } from "react-router-dom"
export default function ProductCard({ product }) {
    return(
        <div style={{ border: "1px solid black", padding: "10px", margin: "10px" , width: "300px"}}>
            <h3> {product.title}</h3>
            <p> {product.desc} </p>
            <button > Price: ${product.price} </button>
            <Link to={`/products/${product.id}`} > view details  </Link>
           
        </div>
    )
}