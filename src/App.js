/*import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;*/




  import './components/categories/categories.styles.scss'
import Directory from './components/directory-item/directory.component.jsx';
import Categories from './components/categories/categories.component.jsx';

const App = () => {
  

  return (
    <div className='categories-container'>
      <Directory categories={Categories()} />
    </div>
  );
}

export default App;





