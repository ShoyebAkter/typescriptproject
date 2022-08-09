import React, { FC } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login: FC = () => {
  
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

  const handleRegister = async (event: any) => {

    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    

    await signInWithEmailAndPassword(email, password);
    console.log(user);
        navigate('/')
      
    // 
  }
  return (
    <div className='container w-50 mx-auto'>
      <h2 style={{ textAlign: 'center' }}>Please Login</h2>
      <form onSubmit={handleRegister}>

        <input type="email" name="email" id="" placeholder='Email Address' required /><br/>

        <input type="password" name="password" id="" placeholder='Password' required /><br/>
        <input
          className='w-50 mx-auto btn btn-primary mt-2'
          type="submit"
          value="Login" />
      </form>
      {errorText}
      <p>Don't have an account <Link to="/register" className='text-primary pe-auto text-decoration-none' >Please Register</Link> </p>
    </div>
  )
}

export default Login