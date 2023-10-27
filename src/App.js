import { Link, Navigate, Route,Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Orders from './Orders';
import Sales from './Sales';
import NotFound from './NotFound';
import HomePage from './HomePage';
import Counter from './Counter';
function App() {

  return (
    <div className="App">
      <Link to='/'>Home</Link>
      &nbsp;&nbsp;
      <Link to='/orders/active'>orders</Link>
      &nbsp;&nbsp;
      <Link to='/sales'>sales</Link>
      &nbsp;&nbsp;
      <Link to='/about'>about</Link>
      &nbsp;&nbsp;
      <hr/>
      <Routes>
        <Route path='/' element={<Counter/>}></Route>
        <Route path='/orders/:type' element={<Orders/>}></Route>
        <Route path='/sales' element={<Sales/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
