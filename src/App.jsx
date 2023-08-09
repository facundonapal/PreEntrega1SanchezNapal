import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer.jsx';
import './styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/product/:id' element={<ProductDetail />} />
        <Route exact path='/cateogry/:category' element={<ItemListContainer />} />
        <Route exact path='/item/:id' element={<ItemDetailContainer />} />
        {/* <Home /> */}
        {/* <About /> */}
        {/* <ItemListContainer  greeting="Welcome to our store!" /> */}
        {/* <ItemDetailContainer/> NEEDS TO BE CREATED TO SHOW ITEM DETAILS WHEN CARD DETAIL BUTTON*/}
      </Routes>

    </BrowserRouter>
  );
};

export default App;
