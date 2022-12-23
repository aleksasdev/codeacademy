import Fetch from "./Fetch.js";

export default class RenderListings{
   constrcutor({outputContainer}){
      this.outputContainer = outputContainer;
   }

   async render(){
      this.data = await new Fetch("", null).get();
      console.log(this.data);
   }

   clear(){
      
   }
}