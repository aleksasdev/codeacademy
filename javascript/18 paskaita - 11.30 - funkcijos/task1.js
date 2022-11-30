// Task 1
// 1) Sukurti funkcijas, kurios atliktų paprastus matematinius veiksmus su duotaisiais parametrais (du parametrai). (4 funkcijos) (optional 7 funkcijos)
function Add(props){
   return props.num1+props.num2;
}
function Subtract(props){
   return props.num1-props.num2;
}
function Multiply(props){
   return props.num1*props.num2;
}
function Divide(props){
   return props.num1/props.num2;
}

// 
function PrintAllArrayElements(array){
   for(let arrayElement of array){
      console.log(arrayElement)
   }
}

// 
function PrintAllArrayElementsReversed(array){
   for(let arrayElement of array.reverse()){
      console.log(arrayElement)
   }
}