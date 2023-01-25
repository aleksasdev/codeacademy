
import { ValidationForm, MINIMUM_LENGTH_8, HAVE_EMAIL_SIGN } from './components/validationForm/ValidationForm';
import { ValidInput } from './components/validationForm/ValidInput';
function App() {
   return (
      <>
         <ValidationForm>
            <ValidInput name="username" requirements={[MINIMUM_LENGTH_8, HAVE_EMAIL_SIGN]} />
            <ValidInput name="email" requirements={[HAVE_EMAIL_SIGN]} />
         </ValidationForm>
      </>
   );
}

export default App;
