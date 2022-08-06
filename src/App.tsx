import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import {Route, Routes} from 'react-router-dom'

const App: React.FunctionComponent=()=> {
  return (
    <div >
      <Login/>
      {/* <Routes>
        <Route path={'/'} element={<Home/>}/>
      </Routes> */}
      
      
    </div>
  );
}

export default App;
