import { useState } from "react";


function Add () {

    const [count, setCount] = useState(0); 

    const Increment = () => {
        setCount(count + 1);
    }
    const Decrement = () => {
        setCount(count - 1);
    }
return(
    <div>
    <h1>usestate</h1>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    <p> Count: {count}</p>
    </div>
)



}

export default Add;