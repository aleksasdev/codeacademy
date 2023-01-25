import { onChange } from './onChange';

export const createInputs = (formObject) =>{
   if(!formObject.values) return;

   const parsedInputsArray = [];
   let index = 0;
   for(const child of formObject.children){
      
      const isValidComponent = child.type.name === "ValidInput";

      let parsedInput = (
         <input 
         requirements={child.props.requirements}
         name={child.props.name}
         value={formObject.values[index].value}
         onChange={e=> onChange(e, formObject)}
         />
      )

      if(!isValidComponent) parsedInput = child;

      index++;
      parsedInputsArray.push(parsedInput);
   }

   formObject.setInputs(parsedInputsArray);
}