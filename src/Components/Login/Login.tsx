import React from 'react'
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';



const Login: React.FunctionComponent=()=> {

    // const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user ,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

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

      const handleRegister=async(event:any)=>{
        event.preventDefault();
        const email:string=event.target.email.value;
        const password:string=event.target.password.value;
        await createUserWithEmailAndPassword(email, password)
        // navigate('/')
        console.log("create user done");
      }

  return (
    <div>
        <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='Password' required />
                <input
                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Register" />
            </form>
    </div>
  )
}

export default Login