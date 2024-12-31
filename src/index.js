import React from 'react';
import { createRoot } from 'react-dom/client'; // Cambia render por createRoot
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { store, persistor } from './store/store';

import './index.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Crea la raíz

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);