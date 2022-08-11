import { MainPage } from './features/main-page/main-page';
import { NotificationProvider } from './providers/notification';
import { StoreProvider } from './providers/store';

import './styles/index.css'

function App() {

  return (
    <NotificationProvider>
      <StoreProvider>
        <MainPage />
      </StoreProvider>
    </NotificationProvider>
  );
}

export default App;
