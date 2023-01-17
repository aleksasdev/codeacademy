import React from 'react'
import { Login } from '../authentication/Login';
import { Register } from '../authentication/Register';
import { Chat } from '../chat/Chat';
import "./main.css";

export const Navbar = (props) => {
   return (
      <nav>
         <div className="nav-button">Home</div>
         <div className="nav-button" onClick={e=> props.setCurrentTab(
            <Chat user={props.user} />
         )}>
            Chat
         </div>
         <div className="nav-button" onClick={e=> props.setCurrentTab(<Register />)}>Register</div>
         {!props.user?
            <div className="nav-button" onClick={e=> props.setCurrentTab(
            <Login setUser={props.setUser} />)}>
               Sign in
            </div>
         :
            // Handle logging out here, no need for extra abstraction 
            <div className="nav-button" onClick={e=> {
               props.setUser(null);
               props.setCurrentTab(null)
            }}>
               Sign out
            </div>
         }
      </nav>
   )
}