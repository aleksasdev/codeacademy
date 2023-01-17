import React from 'react'
import "./authentication.css"
import { nanoid } from "nanoid";
import Fetch from '../../helper/Fetch';
import { DATABASE_PATH } from '../../App';

export const Register = () => {

   function handleRegistration(e){
      const [username, password, avatar] = e.target.elements;

      const data = {
         id: nanoid(),
         username: username.value,
         password: password.value,
         avatarUrl: avatar.value
      }

      new Fetch(DATABASE_PATH, null).post(data);
   }

   return (
      <form action="" className='login-form' onSubmit={handleRegistration}>
         <span>
            <label htmlFor="">Username</label>
            <input type="text" required placeholder='Username' className='input-style' />
         </span>
         <span>
            <label htmlFor="">Password</label>
            <input type="text" required placeholder='Password' className='input-style' />
         </span>
         <span>
            <label htmlFor="">Avatar</label>
            <input type="text" required placeholder='Link to your avatar' className='input-style' />
         </span>
         <input type="submit" value="Register" className='button-style'/>
      </form>
   )
}
