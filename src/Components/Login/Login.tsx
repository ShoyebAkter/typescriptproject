import React, { FC } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { ILoginType } from '../../types/logintype';
import Social from './Social';

const Login: React.FunctionComponent = () => {
  
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  let errorText;
  // console.log(user);
  if (error) {
    errorText=<div>
    <p className='text-danger'>Error: {error?.message}</p>
  </div>
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  const handleLogin = async (event: React.SyntheticEvent) => {

    event.preventDefault();
    const target = event.target as typeof event.target & ILoginType;
    const email:string = target.email.value;
    const password:string = target.password.value;

    await signInWithEmailAndPassword(email, password);
    console.log(user);
    // 
  }
  if(user){
    navigate('/')
  }
  return (
    <div className='container w-50 mx-auto'>
      <h2 style={{ textAlign: 'center' }}>Please Login</h2>
      <form onSubmit={handleLogin}>

        <input type="email" name="email" id="" placeholder='Email Address' required /><br/>

        <input type="password" name="password" id="" placeholder='Password' required /><br/>
        <input
          className='w-50 mx-auto btn btn-primary mt-2'
          type="submit"
          value="Login" />
      </form>
      {errorText}
      <p>Don't have an account <Link to="/register" className='text-primary pe-auto text-decoration-none' >Please Register</Link> </p>
      <Social/>
    </div>
  )
}

export default Login