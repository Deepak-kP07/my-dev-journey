import classes from './Counter.module.css';
import {useDispatch, useSelector } from 'react-redux';
import { counterActions } from './Store/index';




const Counter = () => {
  const counter = useSelector( (state) => state.counter.counter);
  const show = useSelector( state => state.counter.showToggle)
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };
  const incrementhanfler = () =>{
    dispatch(counterActions.increment());
  } 
    const decremetHandler = () => {
    dispatch(counterActions.decrement());
  } 
    const incresehandler = () => {
    dispatch( counterActions.increase(10));
  } 
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     { show && 
       <div className={classes.value}>{counter}</div>
     }
      <div>
        <button onClick={incrementhanfler}>
          Increment
        </button>
        <button onClick={incresehandler}> 
          increse By 10 
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
