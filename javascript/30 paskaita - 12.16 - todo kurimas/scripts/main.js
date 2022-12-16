import CreateTask from "./CreateTask.js";
import Utils from "./Utils.js";

const utils = new Utils();

document.querySelector("#todo .add-task-container form").addEventListener('submit',e=>{
   e.preventDefault();
   const inputValue = document.querySelector("#todo .add-task-container form input[type='text']").value;

   // Check if the input is empty
   if(!inputValue){
      utils.doError({
         errorElement: document.querySelector("#todo .error-message"),
         errorMessage: "You didn't input anything..."
      });
      return false;
   }

   new CreateTask({
      outputContainer: document.querySelector("#todo"),
      taskText: inputValue
   });
});

// TESTING TODO: REMOVE
// new CreateTask({
//    outputContainer: document.querySelector("#todo"),
//    taskText: "Take Out The Trash"
// });