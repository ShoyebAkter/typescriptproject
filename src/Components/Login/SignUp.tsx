import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { ISignUpType } from '../../types/signuptype';

const SignUp: React.FunctionComponent = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const navigate = useNavigate();
  let errorElement;
  if (error) {
    errorElement = <div>
      <p>Error: {error.message}</p>
    </div>
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  const handleRegister = async (event: React.SyntheticEvent): Promise<void> => {

    event.preventDefault();

    const target = event.target as typeof event.target & ISignUpType;
    const name: string = target.name.value;
    const email: string = target.email.value;
    const password: string = target.password.value;

    await createUserWithEmailAndPassword(email, password);
    console.log(user);
    await updateProfile({ displayName: name });

    // 
  }

  if (user) {
    navigate('/')
  }
  return (
    <div className='container w-50 mx-auto'>
      <h2 style={{ textAlign: 'center' }}>Please Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter your name" />
        </Form.Group>
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
      {errorElement}
      <p>Already have an account <Link to="/login" className='text-primary pe-auto text-decoration-none' >Please Login</Link> </p>
    </div>

  )
}
export default SignUp