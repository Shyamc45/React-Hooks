import { useRef } from "react";


function UseRef(){
    const countRef = useRef(0);
    const name = useRef();
    const Increment = () => {
        countRef.current = countRef.current + 1;
        console.log(countRef.current);
    }
    return (
        <div>
            <h1>UseRef</h1>
            <button onClick={Increment}>Increment</button>
            <input ref={name} type="text" name="name" placeholder="Enter your name"></input>
            <button type="button" onClick={() => (console.log(name.current.value))}>Enter</button>


        </div>
    )
}
export default UseRef;