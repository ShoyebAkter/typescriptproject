import React from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { ILoginType } from '../../types/logintype';
import Social from './Social';
import { Button, Form } from 'react-bootstrap';

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
    errorText = <div>
      <p className='text-danger'>Error: {error?.message}</p>
    </div>
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  const handleLogin = async (event: React.SyntheticEvent): Promise<void> => {

    event.preventDefault();
    const target = event.target as typeof event.target & ILoginType;
    const email: string = target.email.value;
    const password: string = target.password.value;

    await signInWithEmailAndPassword(email, password);
    console.log(user);
    // 
  }
  if (user) {
    navigate('/')
  }
  return (
    <div className='container w-50 mx-auto'>
      <h2 style={{ textAlign: 'center' }}>Please Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>


      {errorText}
      <p>Don't have an account <Link to="/register" className='text-primary pe-auto text-decoration-none' >Please Register</Link> </p>
      <p>Forget your password? <Link to="/resetpassword" className='text-primary pe-auto text-decoration-none' >Reset Password</Link> </p>
      <Social />
    </div>
  )
}

export default Login