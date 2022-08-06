import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase';

export default function Home() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      {
        user ? <div>{user.email}</div> : <div>Home</div>
      }
    </div>
  )
}
