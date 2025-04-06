
import './App.css';
import data from './data';
import Tour from './Components/Tour';
import {useState} from 'react';

function App() {

  // pasing data to Tour component
  const [tours , SetTour] = useState(data);
  // remove tour
  function removeTour(id) {
    const newTours = tours.filter(tours => tours.id !== id);
    SetTour(newTours);
  }

  if(tours.length === 0) {
    return(
      <div className='refresh-container'>
        <h2 className='refresh-title'> No tours left </h2>
        <button className='btn-white' onClick={() => SetTour(data)}> Refresh </button>
      </div>
    );
  }
  return (
    <div>
      <Tour tours={tours} removeTour={removeTour} > </Tour>
    </div>
  );
}
export default App;
