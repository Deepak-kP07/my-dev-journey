import { Input } from 'postcss';
import './ProductForm.css';
import { usestate } from 'react' ;

const [ title , setTitle] = usestate('') ;

function titleHandler(event){
    console.log(event.target.value);
}
function ProductForm (){
    return (
        <form>
            <div>
            <lable> Title : </lable>
            <Input type="text" onChange={titleHandler}></Input>
            </div>
            <div>
            <lable> date : </lable>
            <Input type="date"></Input>
            </div>
            <button type="submit" > submit </button>
       </form>
    );
}

export default ProductForm ; 