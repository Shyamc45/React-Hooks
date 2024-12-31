import { useState, useEffect } from "react";


function UseEffect() {
    const [data,setdata] = useState(0)
    useEffect(() => {
        console.log("increment")
    },[data])
    return (
        <div>
            <h1>useEffect</h1>
            {console.log("shyam")}
            <button onClick={()=> {setdata(data+1)}}>increment</button>
        </div>
    )
}

export default UseEffect;