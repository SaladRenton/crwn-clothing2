import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/user.context.jsx'
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductsProvider } from './context/products.context.jsx';
import { CartDropdownProvider } from './context/cart-dropdown.context.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartDropdownProvider>

            <App />
          </CartDropdownProvider>

        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();