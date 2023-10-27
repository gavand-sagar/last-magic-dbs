import logo from './logo.svg';
import './App.css';
import {useEffect, useState } from 'react';
import MyComponent from './MyComponent';

function App() {
  const[flag,setFlag]=useState(true)
  
  return (
    <div className="App">
      <button onClick={()=>setFlag(!flag)}>Toggle</button>
      <hr/>
      {flag == true ? <MyComponent/>:<></>}
    </div>
  );
}

export default App;
