import React from 'react'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

export default function SignUp() {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile] = useUpdateProfile(auth);
      const navigate = useNavigate();
    
      console.log(user);
      if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
    
      const handleRegister = async (event: any) => {
    
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        
    
        await createUserWithEmailAndPassword(email, password);
        console.log(user);
        await updateProfile({ displayName: name });
        navigate('/')
        // 
      }
  return (
    <div className='container w-50 mx-auto'>
      <h2 style={{ textAlign: 'center' }}>Please Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder='Your Name' /><br/>

        <input type="email" name="email" id="" placeholder='Email Address' required /><br/>

        <input type="password" name="password" id="" placeholder='Password' required /><br/>
        <input
          className='w-50 mx-auto btn btn-primary mt-2'
          type="submit"
          value="Register" />
      </form>
      {error && <p>{error}</p>}
      <p>Already have an account <Link to="/login" className='text-primary pe-auto text-decoration-none' >Please Login</Link> </p>
    </div>
  )
}
