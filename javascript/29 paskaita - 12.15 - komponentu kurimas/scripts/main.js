class Element{
   #props;
   #outputContainer;
   #element;
   constructor(props){
      this.#props = props;
      this.#outputContainer = this.#props.outputContainer;
      this.#element = document.createElement(this.#props.type);
      this.#parse();
   }
   // Adds attributes to an element, constructor itself
   // calls this method, but it can be used independently
   addAttributes(props){
      Object.keys(props.attributes).forEach(key=>{
         props.element.setAttribute(key,props.attributes[key]);
      });
   }
   addChild(props){
      this.child = document.createElement(props.type);
      if(props.text){this.child.innerText=props.text};
      if(props.attributes){this.addAttributes({
         attributes: props.attributes,
         element: this.child
      })}
      this.#element.appendChild(this.child);
   }
   #parse(){
      // Add text if available
      if(this.#props.text){this.#element.innerText=this.#props.text};
      // Add attributes to the main element we're creating
      if(this.#props.attributes){
         this.addAttributes({
            attributes: this.#props.attributes,
            element: this.#element
         });
      }
   }
   render(){
      this.#outputContainer.appendChild(this.#element);
   }
}

// Task 1
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

// Task 2
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