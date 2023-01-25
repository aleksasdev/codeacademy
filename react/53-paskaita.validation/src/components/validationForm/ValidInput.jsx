import React from 'react'

export const ValidInput = ({ requirements, name }) => {
   return (
      <input type="text" name={name} requirements={requirements} value="" />
   )
}
