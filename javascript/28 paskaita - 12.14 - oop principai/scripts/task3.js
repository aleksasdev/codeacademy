class CreateElement{
   constructor(props){
      this.props=props;
      return this.render();
   }
   render(){
      this.element = document.createElement(this.props.tag);
      this.element.append(document.createTextNode(this.props.text));
      if(this.props.attributes){
         Object.keys(this.props.attributes).forEach(key=>{
            this.element.setAttribute(key, this.props.attributes[key]);
         });
      }
      return this.element;
   }
}

document.querySelector("#task3").append(new CreateElement({
   tag: "h1",
   text: "lelele",
   attributes: {
      "style":"color: red; margin-left: 4rem"
   }
}));