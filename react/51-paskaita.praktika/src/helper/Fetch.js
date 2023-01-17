export default class Fetch{
   constructor(url, id){
      this.url = url;
      this.id = id;
   }

   log(message){
      console.log(message);
   }

   post(data){
      fetch(this.url, {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then((data) => this.log(`Success!`))
			.catch((error) => this.log(`Error! ${error}`));
   }

   async get(){
      let response = null;

      await fetch(`${this.url}/${this.id? this.id : ""}`)
         .then(res => res.json())
         .then((data) => response = data)
			.catch((error) => this.log(`Error! ${error}`));
      return response;
   }


}