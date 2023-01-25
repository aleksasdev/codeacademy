
import { ValidationForm, MINIMUM_LENGTH_8 } from './components/validationForm/ValidationForm';
import { ValidInput } from './components/validationForm/ValidInput';
function App() {
   return (
      <>
         <ValidationForm>
            <ValidInput name="username" requirements={[MINIMUM_LENGTH_8]} />
            <ValidInput name="email" requirements={[MINIMUM_LENGTH_8]} />
         </ValidationForm>
      </>
   );
}

export default App;
