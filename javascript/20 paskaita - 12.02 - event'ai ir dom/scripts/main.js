// 2) Iš JS'o selektinti elementus 10 naudojant skirtingų selektorių.
let selection1 = document.querySelector('p');
let selection2 = document.querySelector('#test');
let selection3 = document.querySelector('.notes-title');
let selection4 = document.querySelector('h2[class="notes-title"]');
let selection5 = document.querySelector('input[disabled]');
let selection6 = document.querySelector('input[placeholder="lala"]');
let selection7 = document.querySelector('input[type="text"]');
let selection8 = document.querySelector('p[style="color: blue;"]');
let selection9 = document.querySelector('p[style="color: cyan;"]');
let selection10 = document.querySelector('p[style="color: black;"]');

// 3) Išbandyti 5 skirtingus event'ų listener'ius.
selection3.addEventListener('click',(e)=>{
   e.target.style.color="red";
});
document.querySelector('html').addEventListener('keydown',(e)=>{
   e.target.style.color="blue";
});
document.querySelector('html').addEventListener('contextmenu',(e)=>{
   e.target.style.color="red";
});
selection3.addEventListener('dblclick',(e)=>{
   e.target.style.color="cyan";
});
document.querySelector(".remove-disabled").addEventListener('mouseover',(e)=>{
   selection5.disabled=false;
});

// 4) Uždėti vienodą event'ą, 5'iems vienu metu selektintiems elementams.
for(let element of document.querySelectorAll("p")){element.style.color="gray"};