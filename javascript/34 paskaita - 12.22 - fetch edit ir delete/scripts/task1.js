let get = async (id)=>{
   return await fetch(`http://localhost:3000/posts/${id?id:""}`, {
      method: "GET"
   })
   .then(res=>res.json())
   .then(data=>data);
}

let post = (data)=>{
   fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {"Content-type":"application/json"},
      body: JSON.stringify(data)
   })
}

let update = ()=>{
   fetch("http://localhost:3000/posts/1", {
      method: "PUT",
      headers: {"Content-type":"application/json"},
      body: JSON.stringify({
         title: "lmao",
         author: "lol"
      })
   })
}

// Get and display all the book listings
document.querySelector('#task1 .add-book-container').addEventListener('submit', e=>{
   e.preventDefault()
   console.log(e.target.elements)
   post({
      title: e.target.elements.title.value,
      author: e.target.elements.author.value
   })
});

async function renderBookListings(){
   document.querySelector('#task1 .output-container').innerHTML=""
   let data = await get()
   await data.forEach(object=>{
      document.querySelector('#task1 .output-container').innerHTML+=
      `
      <p>Title: ${object.title}</p>
      <p>Author: ${object.author}</p>
      `
   })
}
renderBookListings()