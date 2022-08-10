import { Provider } from 'react-redux';
import { MainPage } from './features/main-page/main-page';
import { store } from './modules/store';

import './styles/index.css'

function App() {

  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
