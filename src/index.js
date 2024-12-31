import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import UserInput from './ReactHooks/usecallback';
// import store from './store';
// import App from './App';
// import { Provider } from 'react-redux';
// import UseMemo from './ReactHooks/usememo';
// import UseContext from './ReactHooks/usecontext';
// import UseEffect from './ReactHooks/useeffect';
// import Add from './ReactHooks/usestate';
// import UseRef from './ReactHooks/useref';






const root = ReactDOM.createRoot(document.getElementById('root'));
const theme={name:"shyam", age:"24", mail: "shyam@123gmail.com"};
const MyContext = createContext();
export default MyContext;
root.render(
<React.StrictMode>

    {/* <Add /> */}


    {/* <UseEffect/> */


   /* <MyContext.Provider value = {theme}>
    <UseContext/>
  </MyContext.Provider> */}


    {/* <Provider store={store}>
    <App />
    </Provider> */}


  {/* <UseRef/> */}


  {/* <UseMemo/> */}


    {/* <UserInput/> */}
  





  </React.StrictMode>





);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
