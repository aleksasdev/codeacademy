import React from 'react'
import "./main.css";

export const Navbar = (props) => {
   return (
      <nav>
         <div className="nav-button">Home</div>
         <div className="nav-button">Chat</div>
         <div className="nav-button">Register</div>
         <div className="nav-button">Login</div>
      </nav>
   )
}