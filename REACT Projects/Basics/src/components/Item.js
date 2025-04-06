import './Item.css';
// import '../components/Item.css'

function Item( props){
    const itemname = props.name ;
    return(
     <div>
        <p className='newClass'> {itemname} </p>
        {props.children}
     </div>    
    );
}

export default Item ;