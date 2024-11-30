import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { UserProvider } from './context/user.context.jsx'
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CategoriesProvider } from './context/categories.context.jsx';
import { CartDropdownProvider } from './context/cart-dropdown.context.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
       {/*  <UserProvider> */}
          <CategoriesProvider>
            <CartDropdownProvider>

              <App />
            </CartDropdownProvider>

          </CategoriesProvider>
        {/* </UserProvider> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();