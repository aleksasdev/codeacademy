import Element from './element.js';
const ul = new Element({
   outputContainer: document.querySelector('body'),
   type: "ul",
   attributes:{class:"task1-ul"}
});

new Element({outputContainer:document.querySelector("body"),type:"h1",text:"Task 1"}).render();

for(let i = 0; i<5; i++){
   ul.addChild({
      type: "li",
      text: "LOL",
      attributes: {style:"color: red;"}
   });
}
ul.render();