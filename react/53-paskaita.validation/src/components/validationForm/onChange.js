import { HAVE_EMAIL_SIGN, MINIMUM_LENGTH_8 } from './ValidationForm';



export const onChange = (e, formObject)=>{
   const allValues = formObject.values;

   const currentValue = e.target.value;
   const requirements = e.target.getAttribute("requirements");
   const name = e.target.name;

   const modifiedValues = allValues.map(entry => {
      const isMatch = entry.name === name;
      if(!isMatch) return entry;

      entry.value=currentValue;
      return entry;
   })

   formObject.setValues(modifiedValues);
   
   if(!isError(formObject.setError, currentValue, requirements)){
      formObject.setError(null);
   }   
}

function isError(setError, currentValue, requirements){

   for(const requirement of requirements.split(",")){

      const output = doesMeetRequirement(requirement, currentValue);
      if(output !== true){
         setError(output)
         return true;
      }

   }

   return false;
}

function doesMeetRequirement(requirement, currentValue){
   if(!currentValue) return true;

   if(requirement === MINIMUM_LENGTH_8){
      if(currentValue.length < 8) return "Your input has to be 8 characters long";
   }
   if(requirement === HAVE_EMAIL_SIGN){
      if(!currentValue.includes("@")) return "You have to put '@' symbol";
   }

   return true;
}