import GetListings from "./GetListings.js";
import PostListing from "./PostListing.js";

new GetListings({outputElement:document.querySelector('#task1 .output-container')}).render();

document.querySelector("#task1 .post").addEventListener('click',e=>post(e))
function post(e){
   console.log("go")
   new PostListing().post()
}

document.querySelector("#task1 .patch").addEventListener('click',e=>edit(e))
function edit(e){
   new PostListing().edit()
}