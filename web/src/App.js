import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import ShoesScreen from './pages/ShoesScreen';
import CartScreen from './pages/CartScreen';
import Header from './layouts/Header';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ShoesScreen />} />
          <Route path="/cart" element={<CartScreen />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}