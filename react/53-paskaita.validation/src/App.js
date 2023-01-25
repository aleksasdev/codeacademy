
import { ValidInput } from './components/validationForm/ValidInput';
import './index.css';
import { HAVE_EMAIL_SIGN, MINIMUM_LENGTH_8, HAVE_GMAIL_PREFIX, MINIMUM_AGE_13 } from './components/validationForm/requirements';
import { ValidationForm } from './components/validationForm/ValidationForm';

function App() {
   return (
      <>
         <ValidationForm>
            <p>Username</p>
            <ValidInput name="username" requirements={[MINIMUM_LENGTH_8]} />
            <p>Email</p>
            <ValidInput name="email" requirements={[HAVE_EMAIL_SIGN, HAVE_GMAIL_PREFIX]} />
            <p>Password</p>
            <ValidInput name="password" requirements={[MINIMUM_LENGTH_8]} />
            <p>Repeat Password</p>
            <ValidInput name="repeatPassword" requirements={[MINIMUM_LENGTH_8]} />
            <p>Age</p>
            <ValidInput name="age" requirements={[MINIMUM_AGE_13]} />
         </ValidationForm>
      </>
   );
}

export default App;
