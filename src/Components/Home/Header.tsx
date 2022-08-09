import { signOut } from 'firebase/auth';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'

export default function Header() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate()
  const logout = (): void => {
    signOut(auth);
    navigate('/login')
  }
  return (
    <div>
      <nav style={{backgroundColor:"black"}}>
        <ul style={{display:"flex",justifyContent:"space-between",listStyle:"none",fontSize:"20px"}}>
          <li><Link style={{textDecoration:"none",color:"white"}} to="/">Home</Link></li>
          <li>{
            !user ? <Link style={{textDecoration:"none",color:"white"}} to="/login">Login</Link>
              :
              <button className="btn btn-ghost bg-white" onClick={logout} >Sign Out</button>
          }
          </li>
        </ul>
      </nav>
    </div>
  )
}
