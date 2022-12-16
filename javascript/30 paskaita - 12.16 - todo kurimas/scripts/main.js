import CreateTask from "./CreateTask.js";
import Utils from "./Utils.js";

const utils = new Utils();

document.querySelector("#todo .add-task-container form").addEventListener('submit',e=>{
   e.preventDefault();
   const inputElement = document.querySelector("#todo .add-task-container form input[type='text']");

   // Check if the input is empty
   if(!inputElement.value){
      utils.doError({
         errorElement: document.querySelector("#todo .error-message"),
         errorMessage: "You didn't input anything..."
      });
      return false;
   }

   new CreateTask({
      outputContainer: document.querySelector("#todo"),
      taskText: inputElement.value
   });

   // Clear input after we've added task
   inputElement.value="";

});

// TESTING TODO: REMOVE
// new CreateTask({
//    outputContainer: document.querySelector("#todo"),
//    taskText: "Take Out The Trash"
// });