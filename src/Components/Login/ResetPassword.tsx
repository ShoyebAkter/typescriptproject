import React, { useState } from 'react'
import { auth } from '../../firebase';
import { useSendPasswordResetEmail} from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

const ResetPassword: React.FunctionComponent = () => {
    const [email, setEmail] = useState<string>('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
      );
      const navigate=useNavigate()
      
      if (sending) {
        return <p>Sending...</p>;
      }
    const resetPassword = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        console.log(email)
        await sendPasswordResetEmail(email).then(()=>{
        navigate('/login')
        });
          alert('Sent email');
    }
    return (
        <div>
            <form onSubmit={resetPassword}>
                <input type="email" name="email" id="" placeholder='Email Address' required onChange={(e) => setEmail(e.target.value)} /><br />
                <input
                    className='w-25 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Reset" />
            </form>
            {error &&
            <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
          }
        </div>
    )
}
export default ResetPassword
