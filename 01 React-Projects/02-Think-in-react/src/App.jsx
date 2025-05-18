import './App.css'
import {useState} from 'react';
const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];
// const inStock = inventory.find(item => item.quantity > 0);
function ProductCategoryRow({category}){
    return(
      <tr >
        <th style={{textAlign:'center'}} colSpan="2">
          {category}
        </th>
      </tr>
    )
}

function ProductRow({product}){
  let name =  product.stocked ? product.name : <span style={{color: 'red'}}> {product.name} </span>
  return(
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}
function ProductTable ({products , filterText , isInStock}){
  let rows = [];
  let lastcategory = null ;
  products.forEach(product => {
   if(product.name.toLowerCase().indexOf(filterText.toLowerCase())  == -1){
    return ; 
   }
   if(isInStock && !product.stocked){
    return;
   }
    if(product.category !== lastcategory ){
      rows.push(
        <ProductCategoryRow category={product.category}   key={product.category}/>
      );
    }
    rows.push(
      <ProductRow product={product} key={product.name} />
    )
    lastcategory = product.category ;
  } )

  return (
   <>
   <table>
    <thead>
      <tr>
        <th> Name </th>
        <th> Price</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
   </table>
   </>
  )

}
function InputSearch({filterText , isInStock , onFilterTextCHnage , onstockchanage}){
    return(
      <>
      <input type="search" placeholder='search..' value={filterText} onChange={(e) => onFilterTextCHnage(e.target.value)} />
      <p> <input type="checkbox"  checked={isInStock} onChange={(e)=>{onstockchanage(e.target.checked)}} />  Only show products in stock </p>
      </>
    )
  }

function App() {
  const[filterText , setFilterText] = useState('');
  const [isInStock , setIsInStock] = useState(false);
  return (
    <>
    <div>
      <InputSearch 
      filterText={filterText}
      isInStock = { isInStock}
      onFilterTextCHnage={setFilterText}
      onstockchanage = { setIsInStock}
      />
      <ProductTable products={PRODUCTS}
      filterText={filterText}
      isInStock = { isInStock}
      />
    </div>
    </>
  )
}

export default App
