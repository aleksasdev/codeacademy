export default class Utils{
   constructor(props){
      this.props = props;
      this.isErrorActive = false;
   }
   async doError({errorElement, errorMessage}){
      if(this.isErrorActive){return false};

      this.isErrorActive = true; // Anti spam feature
      errorElement.style = "display: block;"
      errorElement.innerText = errorMessage;
      await setTimeout(() => {
         errorElement.style = "display: none;"
         this.isErrorActive = false;
      }, "2000");
   }
}