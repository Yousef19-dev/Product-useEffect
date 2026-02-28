import { use, useEffect, useState } from 'react';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [cartItems, setCartItem] = useState([]);
  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home cartItem={cartItems} setCartItem={setCartItem} />} />
        <Route path="/home" element={<Home cartItem={cartItems} setCartItem={setCartItem}/>} />
        <Route path="/cart" element={<Cart cartItem={cartItems} setCartItem={setCartItem}/>} />
      </Routes>
    </>
  );
}

export default App;
