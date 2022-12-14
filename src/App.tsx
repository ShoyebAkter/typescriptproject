import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {Route, Routes} from 'react-router-dom'
import Login from './Components/Login/Login';
import Header from './Components/Home/Header';
import SignUp from './Components/Login/SignUp';
import ResetPassword from './Components/Login/ResetPassword';

const App: React.FunctionComponent=():JSX.Element=> {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='/register' element={<SignUp/>}></Route>
        <Route path='/resetpassword' element={<ResetPassword/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
