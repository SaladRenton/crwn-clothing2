// App.js
import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Link to="/learn">Learn React</Link>
    </div>
  );
};

export default App;