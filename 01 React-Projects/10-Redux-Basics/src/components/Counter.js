import classes from './Counter.module.css';
import {useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter = useSelector( (state) => state.counter);
  const dispatch = useDispatch();
  const incrementhanfler = () =>{
    dispatch({type:'INCREMENT'});
  } 
    const decremetHandler = () => {
    dispatch({type:'INCREMENT'});
  } 
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementhanfler}>
          Increment
        </button>
        <button onClick={decremetHandler}>
          Descrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
