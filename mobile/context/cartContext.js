import React, { createContext, useState, useContext } from 'react';

// Criar o contexto do carrinho
const CartContext = createContext();

// Criar um provider para gerenciar o carrinho globalmente
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (!cart.find(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para facilitar o uso do contexto
export const useCart = () => useContext(CartContext);
