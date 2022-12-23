export default class Fetch{
   constrcutor(id, data){
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
      fetch("http://localhost:3000/posts", {
         method: "POST",
         headers: {"Content-type":"application/json"},
         body: JSON.stringify(data)
      })
   }

   async update(){
      if(!this.id){console.log("No id provided."); return false};
      fetch(`http://localhost:3000/posts/${this.id}`, {
         method: "PUT",
         headers: {"Content-type":"application/json"},
         body: JSON.stringify({
            title: "lmao",
            author: "lol"
         })
      })
   }
}