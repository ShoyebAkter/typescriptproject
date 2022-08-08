import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import AddData from '../AddData/AddData';
import GetData from '../GetData/GetData';
import Header from './Header';

export default function Home() {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  return (
    <div>
      <Header/>
      {
        user ? <div>
          <div>{user.email}</div>
          <AddData/>
          <GetData/>
        </div> :
         <div>Home</div>
      }
    </div>
  )
}
