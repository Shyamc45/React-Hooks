import {createContext, useContext } from "react";
import MyContext from '../index.js';

function UseContext(){
    const theme = useContext(MyContext);
    return (
        <div>
            <h1> UseContext </h1>
            <p>Name: {theme.name}</p>
            <p>Age: {theme.age}</p>
            <p>Mail: {theme.mail}</p>

        </div>
    )
}
export default UseContext;