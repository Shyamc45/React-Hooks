import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './store';

const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector((state) => state.counter.value);

    return (
        <div>
            <h1>Counter: {counterValue}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
};

export default Counter;
