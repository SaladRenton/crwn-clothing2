// App.js
import { Routes, Route } from 'react-router-dom';
import Home from "./components/routes/home/home.component";
import Navigation from './components/navigation/navigation.component.jsx';
import SignIn from './components/routes/sign-in/sign-in.component.js';

const Shop = () => {
  return (
    <div>
      <h1>'Compraaa'</h1>
    </div>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;



