import { handleOnChange } from './handle';

export const createInputs = (children, values, setInputs) =>{
   if(!values) return;

   const parsedInputsArray = [];
   let index = 0;
   for(const child of children){

      const parsedInput = (
         <input 
         name={child.props.name}
         value={values[index].value}
         onChange={handleOnChange}
         />
      )
      
      index++;
      parsedInputsArray.push(parsedInput);
   }

   setInputs(parsedInputsArray);
}