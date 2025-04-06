import './App.css';
// import NewProducts from './componets/NewProducts';
import { useState , useEffect } from 'react';

function App() {

  const [text , setText ] = useState ();
  function inputHandler(event){
    console.log(event.target.value);  
    setText(event.target.value);
  }

  // variant 1 
useEffect (
  () =>{
    console.log("UI updated ")
  }
);

// variation -2 
useEffect (
  () =>{
    console.log("UI updated - 2 ");
  } , []);

// variation -3
useEffect (
  () =>{
    console.log("UI updated -3 ");
  } , [text]
)

  return (
    <div> 
      <h1> {text} </h1>
      <input type='text'placeholder='Enter here ' onChange={inputHandler} />
      <button onClick={() => setText('Hello World')}> Click </button>
    </div>
  );
}

export default App;
