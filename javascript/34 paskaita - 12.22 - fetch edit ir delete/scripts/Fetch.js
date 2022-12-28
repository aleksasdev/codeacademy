import { RenderListings } from "./main.js";

export default class Fetch{
   constructor(id, data){
      this.id = id;
      this.data = data;
   }

  async get(){
      return await fetch(`http://localhost:3000/posts/${this.id?this.id:""}`, {
         method: "GET"
      })
      .then(res=>res.json())
      .then(data=>data);
   }

   async post(){
      console.log(this.data)
      fetch("http://localhost:3000/posts", {
         method: "POST",
         headers: {"Content-type":"application/json"},
         body: JSON.stringify(this.data)
      })
      RenderListings();
   }

   async edit(){
      if(!this.id){console.log("No id provided."); return false};
      fetch(`http://localhost:3000/posts/${this.id}`, {
         method: "PUT",
         headers: {"Content-type":"application/json"},
         body: JSON.stringify(this.data)
      })
   }

   async delete(){
      if(!this.id){console.log("No id provided."); return false};
      fetch(`http://localhost:3000/posts/${this.id}`, {
         method: "DELETE"
      })
      RenderListings();
   }
}