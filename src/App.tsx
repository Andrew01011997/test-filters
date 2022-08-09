import { Provider } from 'react-redux';
import { store } from './modules/store';
import './styles/index.css'

function App() {
  return (
    <Provider store={store}>
      <div className="">
        xyq
      </div>
    </Provider>
  ); 
}

export default App;
