import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer.jsx';
import './styles.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer  greeting="Welcome to our store!" />
    </div>
  );
};

export default App;
