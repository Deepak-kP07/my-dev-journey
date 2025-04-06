import './ItemDate.css';

function ItemDate(props){
    const day = props.day ;
    const month = props.month;
    const yr = props.year ;
    return (
        <div className='Deepak'>
            <div>{day}</div>
            <div>{month}</div>
            <div> {yr}</div>
        </div>
    );
}

export default ItemDate ;