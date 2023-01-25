export const createValues = (formObject) =>{
   const valuesArray = [];
   
   for(const child of formObject.children){
      const name = child.props.name;
      const requirements = child.props.requirements;

      valuesArray.push({
         name: name,
         requirements: requirements,
         value: ""
      })
   }

   formObject.setValues(valuesArray);
}