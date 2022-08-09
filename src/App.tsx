import { Provider } from 'react-redux';
import { DatePicker } from './components/date-picker/date-picker';
import { InputField } from './components/input/input-field';
import { Select } from './components/select/select';
import { store } from './modules/store';

import './styles/index.css'

function App() {
  return (
    <Provider store={store}>
      <div className="grid grid-cols-3">
        <InputField name="inp"  /> 
        <Select />
        <DatePicker />
      </div>
    </Provider>
  ); 
}

export default App;
