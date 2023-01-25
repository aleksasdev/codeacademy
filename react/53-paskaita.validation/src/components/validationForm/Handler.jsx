import { useContext } from 'react';
import { ValidationContext } from './ValidationForm';
import React from 'react'

export const Handler = (e) => {
    const validationContext = useContext(ValidationContext)

   return (
      <div>Handler</div>
   )
}