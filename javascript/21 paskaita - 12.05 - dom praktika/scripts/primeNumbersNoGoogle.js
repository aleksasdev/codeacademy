function getPrimeNumbersWithoutGoogling(toNum){
   var primeNumbers = [2];
   for(let i = 2; i <= toNum; i++){
      let isPrime=true;
      for(let alreadyDefinedPrimeNumber of primeNumbers){
         if(i % alreadyDefinedPrimeNumber === 0){
            isPrime=false;
            break;
         }
      }
      isPrime?primeNumbers.push(i):null;
   }
   console.log(primeNumbers);
}