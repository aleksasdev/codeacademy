export default class PostListing{
   construct(){

   }

   post(){
      let postData = {
         image: "",
         city: "",
         price: 1,
         description: ""
      }

      fetch('',{
      method: "POST",
      headers:{
         'Content-type':'application/json'
      },
      body: JSON.stringify(postData)
      })
      .then(res=>res.json())
      .then(data=>console.log(data))
   }

   edit(){
      let postData = {
         image: "",
         city: "",
         price: 1,
         description: ""
      }

      fetch('',{
      method: "PUT",
      headers:{
         'Content-type':'application/json'
      },
      body: JSON.stringify(postData)
      })
      .then(res=>res.json())
      .then(data=>console.log(data))
   }
}