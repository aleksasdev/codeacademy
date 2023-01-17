import React from 'react'
import { USERS_PATH } from '../../App'
import Fetch from '../../helper/Fetch'
import "./authentication.css"

export const Login = ({setUser}) => {

   // What the heck is this XD you'd get hacked so fast
   // if you were authenticating the user on client side,
   // but oh well, no need to overcomplicate this
   async function handleLogin(e){
      e.preventDefault();

      const [username, password] = e.target.elements;

      const allUsers = await new Fetch(USERS_PATH, null).get();
      console.log(allUsers);

      const matchingUser = allUsers.filter(entry => entry.username === username.value)[0];
      if(!matchingUser){ console.log("Username is invalid"); return; }

      const isPasswordCorrect = matchingUser.password === password.value;
      if(!isPasswordCorrect){ console.log("Password is invalid"); return; }

      // If username and password matches, we'll set user state
      // to the matching user object we've fetched
      setUser(matchingUser);
   }

   return (
      <form action="" className='login-form' onSubmit={handleLogin}>
         <span>
            <label htmlFor="">Username</label>
            <input type="text" required placeholder='Username' className='input-style' />
         </span>
         <span>
            <label htmlFor="">Password</label>
            <input type="text" required placeholder='Password' className='input-style' />
         </span>
         <input type="submit" value="Login" className='button-style'/>
      </form>
   )
}
