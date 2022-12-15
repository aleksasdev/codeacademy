export default class Table{
   constructor(props){
      this.props=props;
      this.#create();
      if(props.attributes){this.#addAttributes()};
   }
   #addAttributes(){
      Object.keys(this.props.attributes).forEach(key=>{
         this.table.setAttribute(key, this.props.attributes[key]);
      });
   }
   #create(){
      this.bodyEntries=[];
      this.headEntries=[];

      this.table=document.createElement('table');
      this.thead=document.createElement('thead');
      this.tbody=document.createElement('tbody');

      // Create head columns first
      this.tr = document.createElement('tr');
      for(let i = 0; i<this.props.columns; i++){
         this.th = document.createElement('th');

         this.tr.append(this.th);
         this.headEntries.push(this.th);
      }
      this.thead.append(this.tr);

      // Create body columns and rows
      for(let i = 1; i<this.props.rows; i++){
         this.tr = document.createElement('tr');
         for(let i = 0; i<this.props.columns; i++){
            this.td = document.createElement('td');
            this.bodyEntries.push(this.td);
            this.tr.append(this.td);
         }
         this.tbody.append(this.tr);
      }

      this.table.append(this.thead);
      this.table.append(this.tbody);
   }
   addEntryBody(props){
      for(let entry of this.bodyEntries){
         if(!entry.innerText){
            entry.innerText=props.text;
            break;
         }
      }
   }
   addEntryHead(props){
      for(let entry of this.headEntries){
         if(!entry.innerText){
            entry.innerText=props.text;
            break;
         }
      }
   }
   render(){
      this.props.outputContainer.append(this.table);
   }
}