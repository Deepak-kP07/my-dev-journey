import { useParams } from "react-router-dom"
export default function ProductItem(){
    const params = useParams();
    return<>
        <h1> product details  </h1>
        
        {params.id}
    </>
}