import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase';
import AddData from '../AddData/AddData';

export default function Home() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      {
        user ? <div>
          <AddData/>
        </div> :
         <div>Home</div>
      }
    </div>
  )
}
