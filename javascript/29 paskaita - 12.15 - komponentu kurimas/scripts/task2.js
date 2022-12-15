import Element from './element.js';
const select = new Element({
   outputContainer: document.querySelector('body'),
   type: "select",
   attributes:{class:"task2-select"}
});

new Element({outputContainer:document.querySelector("body"),type:"h1",text:"Task 2"}).render();

for(let i = 0; i<5; i++){
   select.addChild({
      type: "option",
      text: "LOL"+i,
      attributes: {style:"color: blue; font-size: 2rem"}
   });
}
select.render();