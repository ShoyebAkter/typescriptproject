import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {Route, Routes} from 'react-router-dom'
import Login from './Components/Login/Login';

const App: React.FunctionComponent=()=> {
  return (
    <div >
      <Home/>
      <Login/>
    </div>
  );
}

export default App;
