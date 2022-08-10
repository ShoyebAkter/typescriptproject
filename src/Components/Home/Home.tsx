import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import AddData from '../AddData/AddData';
import GetData from '../GetData/GetData';
import Header from './Header';

const Home:React.FunctionComponent=()=> {
  const [user, loading, error] = useAuthState(auth);
  // console.log(user);
  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }
  return (
    <div>
      {
        user ?
          <div>
            <div>{user.email}</div>
            <AddData />
          </div>
          :
          <div>Please login or create an account</div>
      }
    </div>
  )
}
export default Home