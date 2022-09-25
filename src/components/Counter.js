import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter, derementCounter, resetCounter } from '../services/actions/counterAction';


const Counter = () => {
    const count = useSelector(state => state.count);
    console.log(count)

    const dispatch = useDispatch()
   
    const handleIncrement = () => {
        dispatch(incrementCounter())
    }
    const handleDecrement = () => {
        dispatch(derementCounter())
    }
    const handleReset = () => {
        dispatch(resetCounter())
    }
    return (
        <div>
            <h2>My Counter App</h2>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;

// state=>count : 0
// action --> increment, decrement, reset
// reducer ==> increment --> count => count + 1
// ==> decrement --> count => count - 1
// store -
// providing store in react
// use store