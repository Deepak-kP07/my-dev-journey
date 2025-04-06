// import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App() {
  const person = [
    {
      name : " Deepak",
      day : 29 ,
      month : " Dec",
      year : 2004
    },
    {
      name : " Satya",
      day : 15 ,
      month : " Nov",
      year : 2007
    },
    {
      name : " Yuvi ",
      day : 8 ,
      month : " Jan",
      year : 2005
    },
  ];
  return(
  <div >
    <div  className='person-container'>
          <div className='person'>
          <Item name={person[0].name}></Item>
          <ItemDate day={person[0].day} month={person[0].month} year={person[0].year} > </ItemDate>
          </div>

          <div className='person'>
          <Item name={person[1].name}> Deepak loves me  </Item>
          <ItemDate day={person[1].day} month={person[1].month} year={person[1].year} > </ItemDate>
          </div>
          
          <div className='person'>
          <Item name={person[2].name}></Item>
          <ItemDate day={person[2].day} month={person[2].month} year={person[2].year} > </ItemDate>
          </div>
    </div>
    <h1 className= "App"> Deepak KP </h1>
  </div>
  );
}

export default App;
