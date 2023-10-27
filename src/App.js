import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import MyComponent from './MyComponent';
import { useDispatch } from 'react-redux';
import { changeCurrentUsername } from './data/store';

function App() {

  const [flag, setFlag] = useState(true)

  const dispatch = useDispatch();

  function magic(){
    //change the global data
    dispatch(changeCurrentUsername("Spiderman"))
  }

  return (
    <div className="App">

      <button onClick={magic}>Magic</button>
      <br/>
      <br/>
      <br/>

      <button onClick={() => setFlag(!flag)}>Toggle</button>
      <hr />
      {flag == true ? <MyComponent /> : <></>}
    </div>
  );
}

export default App;
