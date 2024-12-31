import React, { useState, useMemo } from "react";

function UseMemo() {
    const [count, setCount] = useState(0);
    const expensiveCalculation = (num) => {
        console.log("Perform expensive calculation");
        for (let i = 0; i < 1000000000; i++) {} 
        return num * 1;
    };
    const memoizedValue = useMemo(() => {
        return expensiveCalculation(count);
    }, [count]);
    return (
        <div >
            <h1>useMemo</h1>
            <h2>Count: {count}</h2>
            <h2>Memoized Value: {memoizedValue}</h2>
            <button onClick={() => setCount(count + 1)}>Increment Count </button>
        </div>
    );
}

export default UseMemo;