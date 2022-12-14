class LogName{
   #name;
   #surname;
   #fullname;
   #outputElement;
   constructor(fullname,outputElement){
      this.#fullname=fullname;
      this.#outputElement=outputElement;
      this.#parseFullname();
   }
   #parseFullname(){
      let parsedName=this.#fullname.split(" ");
      this.#name=parsedName[0][0].toUpperCase()+parsedName[0].toLowerCase().slice(1);
      this.#surname=parsedName[1][0].toUpperCase()+parsedName[1].toLowerCase().slice(1);
   }
   appendToOutput(){
      this.#outputElement.innerHTML+=(
         `
         <tr>
            <td>${this.#name}</td>
            <td>${this.#surname}</td>
         </tr>
         `
      )
   }
}
document.querySelector("#task1 form").addEventListener('submit',e=>{
   e.preventDefault();
   new LogName(e.target.elements[0].value,document.querySelector("#task1 table tbody")).appendToOutput();
});