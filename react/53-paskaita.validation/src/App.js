
import { ValidInput } from './components/validationForm/ValidInput';
import './index.css';
import { HAVE_EMAIL_SIGN, MINIMUM_LENGTH_8 } from './components/validationForm/requirements';
import { ValidationForm } from './components/validationForm/ValidationForm';

function App() {
   return (
      <>
         <ValidationForm>
            <p>Username</p>
            <ValidInput name="username" requirements={[MINIMUM_LENGTH_8]} />
            <p>Email</p>
            <ValidInput name="email" requirements={[HAVE_EMAIL_SIGN]} />
            <p>Password</p>
            <ValidInput name="password" requirements={[MINIMUM_LENGTH_8]} />
            <p>Repeat Password</p>
            <ValidInput name="repeatPassword" requirements={[MINIMUM_LENGTH_8]} />
            <p>Age</p>
            <ValidInput name="age" requirements={[]} />
         </ValidationForm>
      </>
   );
}

export default App;
