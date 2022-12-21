function get(){
   fetch('https://jsonplaceholder.typicode.com/posts/?userId=5',
   {
      method: "GET"
   })
      .then(res=>res.json())
      .then(data=>console.log(data))
}

function post(){
   let postData={
      body: 'Lololololol',
      title: "Lmao",
      userId: 5
   }
   fetch('https://jsonplaceholder.typicode.com/posts',{
      method: "POST",
      headers:{
         'Content-type':'application/json'
      },
      body: JSON.stringify(postData)
   })
      .then(res=>res.json())
      .then(data=>console.log(data))
}
get()
post()