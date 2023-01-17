import React from 'react'
import "./authentication.css"

export const Login = () => {
   return (
      <form action="" className='login-form'>
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
