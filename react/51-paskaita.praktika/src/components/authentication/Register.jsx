import React from 'react'
import "./authentication.css"

export const Register = () => {
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
         <span>
            <label htmlFor="">Avatar</label>
            <input type="text" required placeholder='Link to your avatar' className='input-style' />
         </span>
         <input type="submit" value="Register" className='button-style'/>
      </form>
   )
}
