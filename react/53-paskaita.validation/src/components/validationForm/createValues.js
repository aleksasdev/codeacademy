export const createValues = (children, setValues) =>{
   const valuesArray = [];
   
   for(const child of children){
      const name = child.props.name;
      const requirements = child.props.requirements;

      valuesArray.push({
         name: name,
         requirements: requirements,
         value: ""
      })
   }

   setValues(valuesArray);
}