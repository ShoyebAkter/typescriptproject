import { signOut } from 'firebase/auth';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'

export default function Header() {
    const user=useAuthState(auth);

    const logout=()=>{
        signOut(auth);
    }
  return (
    <div>
        <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li>{user ? <button className="btn btn-ghost" onClick={logout} >Sign Out</button> : <a href="/login">Login</a>}</li>
      </ul>
    </nav>
    </div>
  )
}
