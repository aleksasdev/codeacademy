function getPrimeNumbersWithoutGoogling(toNum){
   let primeNumbers = [2];
   let countOptimizationCycles=0;
   let startTime = performance.now()
   for(let i = 2; i <= toNum; i++){
      let isPrime=true;
      for(let alreadyDefinedPrimeNumber of primeNumbers){
         // If we can divide a number we're testing by
         // our already existing prime number, then the
         // number we're testing IS NOT a prime number,
         // because this means there's 3 factors now
         // number/number, number/1, number/alreadyDefinedPrimeNumber.
         // And a prime number can only have 2 factors MAX.
         // let's say we're testing [10].
         // 10/10 = 1 factor, 10/1 = 2 factor. which still makes it
         // a prime number right? But if we start dividing [10]
         // by our prime numbers, which starts from 2:
         // 10/2 = 5, now we have 3 factors, so [10] IS
         // NO LONGER a prime number and we can stop the loop
         // and conclude that [10] isn't a prime number
         if(i % alreadyDefinedPrimeNumber === 0){
            isPrime=false;
            break;
         }
         // Optimization code.
         // If we're starting to test prime numbers that are
         // more than half of the the number we're testing...
         // Let's say, we're checking [100] and we're testing
         // it with the prime number [53], we can break the loop instantly
         // and not continue any further, since we'd still have to test 
         // [59], [61], [67], etc..., but since these prime numbers
         // are more than half of the number we're testing, then
         // it's pointless, since it'll never divide into a whole number.
         // 100/53 = 1.88679245283, 100/59 = 1.69491525424.
         // So if the number hasn't been found as non-prime since this
         // point, THEN we can safely assume that the number in question
         // is prime and don't need to continue any further
         if(i/2+2 < alreadyDefinedPrimeNumber && i > 100){
            countOptimizationCycles++;
            break;
         }
      }
      isPrime?primeNumbers.push(i):null;
   }
   console.log("Function ran in:",((performance.now()-startTime)/1000).toFixed(2),"seconds");
   console.log("Optimization ran this many times:",countOptimizationCycles);
   console.log(primeNumbers);
}

function getPrimeNumbersNewFormula(toNum){
   let startTime = performance.now()
   let primeNumbers=[2];

   for(let numberToTest = 2; numberToTest < toNum; numberToTest++){
      for(let j = 2; j <= parseInt(Math.sqrt(numberToTest))+1; j++){
         if(numberToTest%j===0){break};
         console.log(numberToTest);
         primeNumbers.push(numberToTest);
      }
   }
   console.log("Function ran in:",((performance.now()-startTime)/1000).toFixed(2),"seconds");
   return primeNumbers;
}