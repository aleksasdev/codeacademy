class CreateHeading{
   constructor(props){
      this.props=props;
      return this.render();
   }
   render(){
      this.element = document.createElement(`h${this.props.size}`);
      this.element.innerText=this.props.text;
      if(this.props.attributes){
         Object.keys(this.props.attributes).forEach(key=>{
            this.element.setAttribute(key, this.props.attributes[key]);
         });
      }
      return this.element;
   }
}

document.querySelector("#task3").append(new CreateHeading({
   size: 1,
   text: "lelele",
   attributes: {
      "style":"color: red; font-size: 5rem; margin-left: 4rem"
   }
}));