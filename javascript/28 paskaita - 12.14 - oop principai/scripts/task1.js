class LogName{
   #namesArray=[];
   #outputElement;
   constructor(outputElement){
      this.#outputElement=outputElement;
   }
   add(fullname){
      let splitFullname = fullname.split(" ");
      let name = splitFullname[0][0].toUpperCase()+splitFullname[0].toLowerCase().slice(1);
      let surname = splitFullname[1][0].toUpperCase()+splitFullname[1].toLowerCase().slice(1);
      this.#namesArray.push({name:name,surname:surname});
   }
   flush(){
      this.#outputElement.innerHTML="";
      this.#namesArray.forEach(element=>{
         this.#outputElement.innerHTML+=
            `
            <tr>
               <td>${element.name}</td>
               <td>${element.surname}</td>
            </tr>
            `
      });
   }
}
const log = new LogName(document.querySelector("#task1 table tbody"));
document.querySelector("#task1 form").addEventListener('submit',e=>{
   e.preventDefault();
   log.add(e.target.elements[0].value);
   log.flush();
});