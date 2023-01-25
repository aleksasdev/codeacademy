import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { createValues } from './createValues';
import { createInputs } from './createInputs';
import './index.css';

export const ValidationForm = (props) => {

   const [values, setValues] = useState(null);
   const [inputs, setInputs] = useState(null);
   const [error, setError] = useState(null);

   const formObject = {
      children: props.children,
      values: values,
      setValues: setValues,
      inputs: inputs,
      setInputs: setInputs,
      error: error,
      setError: setError
   }

   useEffect(()=>{
      createInputs(formObject);
   }, [values])

   useEffect(()=>{
      createValues(formObject);
   }, [])

   return (
      <form className="validation-form">
         {inputs}

         {error &&
            <div className="error-widget">
               <p>{error}</p>
            </div>
         }
      </form>
   )
}
