import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { createValues } from './createValues';
import { createInputs } from './createInputs';

export const MINIMUM_LENGTH_8 = "min8";
export const HAVE_EMAIL_SIGN = "@";

export const ValidationForm = (props) => {

   const [values, setValues] = useState(null);
   const [inputs, setInputs] = useState(null);

   useEffect(()=>{
      createInputs(props.children, values, setInputs);
   }, [values])

   useEffect(()=>{
      createValues(props.children, setValues);
   }, [])

   return (
      <form action="">
         {inputs}
      </form>
   )
}
