
fetch('https://randomuser.me/api/')
   .then(res => res.json())
   .then(data => {
      console.log(data.results[0])
      document.querySelector("#task2").innerHTML=
      `
      <div class="person-container">
         <img src="${data.results[0].picture.large}">
         <div class="description-container">
            <p><span class="highlight">[${data.results[0].name.title}]</span> ${data.results[0].name.first} ${data.results[0].name.last}</p>
            <p><span class="highlight">Age: </span>${data.results[0].dob.age}</p>
            <p><span class="highlight">City: </span>${data.results[0].location.city}</p>
            <p><span class="highlight">Address: </span>${data.results[0].location.street.name} ${data.results[0].location.street.number}</p>
            <p><span class="highlight">Email: </span>${data.results[0].email}</p>
         </div>
      </div>
      `
   })