var currentIndex = 0;

async function sleep(tiemToSleepFor){
   await new Promise(sleep => setTimeout(sleep, tiemToSleepFor))
}

async function test(props){
   let waitFor = Math.random()*4000;
   await sleep(waitFor);
   await console.log(`Function ${props.index} finished`);
}

for(let i = 0; i < 10; i++){
   test({index: currentIndex++});
   
}