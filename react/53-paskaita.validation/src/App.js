
import { useState } from 'react';
import { HAVE_EMAIL_SIGN, MINIMUM_LENGTH_8, HAVE_GMAIL_PREFIX, MINIMUM_AGE_13, HAVE_VALID_EMAIL } from './components/validationForm/requirements';
import { ValidationForm } from './components/validationForm/ValidationForm';
import { useEffect } from 'react';

function App() {

   const [submit, setSubmit] = useState(null);

   useEffect(()=>{
      if(!submit) return;
      console.log("We have a new submit!", submit)
   }, [submit])

   return (
      <>
         <ValidationForm label="Submit" submitState={setSubmit}>
            <p>Username</p>
            <input name="username" requirements={[MINIMUM_LENGTH_8]} />
            <p>Email</p>
            <input name="email" requirements={[HAVE_VALID_EMAIL, HAVE_GMAIL_PREFIX]} />
            <p>Password</p>
            <input name="password" requirements={[MINIMUM_LENGTH_8]} />
            <p>Repeat Password</p>
            <input name="repeatPassword" requirements={[MINIMUM_LENGTH_8]} />
            <p>Age</p>
            <input name="age" requirements={[MINIMUM_AGE_13]} />
         </ValidationForm>
      </>
   );
}

export default App;
