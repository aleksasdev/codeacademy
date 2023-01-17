import React from 'react'
import { Login } from '../authentication/Login';
import { Register } from '../authentication/Register';
import "./main.css";

export const Navbar = (props) => {
   return (
      <nav>
         <div className="nav-button">Home</div>
         <div className="nav-button">Chat</div>
         <div className="nav-button" onClick={e=> props.setCurrentTab(<Register />)}>Register</div>
         {!props.isLoggedIn?
            <div className="nav-button" onClick={e=> props.setCurrentTab(<Login />)}>Sign in</div>
         :
            <div className="nav-button">Sign out</div>
         }
      </nav>
   )
}