import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {Route, Routes} from 'react-router-dom'
import Login from './Components/Login/Login';

const App: React.FunctionComponent=()=> {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
