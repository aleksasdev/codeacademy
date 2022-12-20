function parseActors(props){
   let returnData=``
   props.actors.forEach(actor=>{
      returnData+=`<li>${actor}</li>`
   })
   return returnData;
}

fetch('./data/movies.json')
   .then(res => res.json())
   .then(data => {
      data.movies.forEach(movie=>{
         document.querySelector("#task1").innerHTML+=
         `
         <div class="movies-container">
            <h2 class="name">${movie.name}</h2>
            <img class="cover" src="${movie.poster}">
            <div class="description-container">
               <span>
                  <h4>Movie length</h4>
                  <p>${movie.length} minutes</p>
               </span>
               <ul class="actors-container">
                  <h4>Actors</h4>
                  ${parseActors({actors:movie.actors})}
               </ul>
            </div>
         </div>
         `
      })
   })