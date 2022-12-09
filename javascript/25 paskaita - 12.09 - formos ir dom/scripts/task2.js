document.querySelector('#table form').addEventListener('submit',e=>{
   e.preventDefault();

   // Clear out any tables that have been made already
   if(e.target.parentElement.children.length>1){
      e.target.parentElement.removeChild(e.target.parentElement.lastChild);
   }

   const [rows, columns] = e.target.elements;
   const tableElement = document.createElement("table");

   for(let i = 0; i<rows.value; i++){
      const tableRowElement = document.createElement("tr");
      for(let i = 0; i<columns.value; i++){
         const tableDataElement = document.createElement("td");
         tableRowElement.appendChild(tableDataElement);
      }
      tableElement.appendChild(tableRowElement);
   }

   e.target.parentElement.appendChild(tableElement);
});