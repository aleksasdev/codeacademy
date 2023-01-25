
import { ValidationForm, MINIMUM_LENGTH_8, HAVE_EMAIL_SIGN } from './components/validationForm/ValidationForm';
import { ValidInput } from './components/validationForm/ValidInput';
import './index.css';

function App() {
   return (
      <>
         <ValidationForm>
            <p>Username</p>
            <ValidInput name="username" requirements={[MINIMUM_LENGTH_8, HAVE_EMAIL_SIGN]} />
            <p>Email</p>
            <ValidInput name="email" requirements={[HAVE_EMAIL_SIGN]} />
         </ValidationForm>
      </>
   );
}

export default App;
