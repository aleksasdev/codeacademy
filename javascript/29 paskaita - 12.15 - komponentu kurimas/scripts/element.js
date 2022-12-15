export default class Element{
   #props;
   #outputContainer;
   #element;
   constructor(props){
      this.#props = props;
      this.#outputContainer = this.#props.outputContainer;
      this.#element = document.createElement(this.#props.type);
      this.#parse();
   }
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
      // Add text to the main element if available
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