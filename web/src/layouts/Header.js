import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/LogoQuality.png';

const Header = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  return (
    <div style={{ backgroundColor: 'var(--headerBackground)', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        <img src={Logo} alt="Logo" style={{ width: '187px', height: '23.85px' }} />
      </button>
      <button onClick={() => navigate('/cart')} style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'right' }}>
        <span style={{ fontSize: '16px', color: 'white' }}>Meu carrinho</span>
        <div style={{ fontSize: '14px', color: 'white' }}>
          {cart.length} {cart.length === 1 ? 'item' : 'itens'}
        </div>
      </button>
    </div>
  );
};

export default Header;
