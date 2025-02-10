import React, { useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';
import Header from '../layouts/Header';

const CartScreen = () => {
  const { cart, setCart } = useCart();
  const [quantities, setQuantities] = useState(cart.reduce((acc, item) => {
    acc[item.id] = "1";
    return acc;
  }, {}));
  const [isModalVisible, setModalVisible] = useState(false);

  const handleQuantityChange = (id, value) => {
    if (value === "" || (/^\d+$/.test(value) && parseInt(value, 10) > 0)) {
      setQuantities((prev) => ({ ...prev, [id]: value }));
    }
  };

  const total = useMemo(() => {
    return cart.reduce((sum, item) => {
      return sum + (parseInt(quantities[item.id] || "1", 10) * item.preco);
    }, 0);
  }, [cart, quantities]);

  const handleFinalizeOrder = () => {
    setModalVisible(true);
  };

  const confirmOrder = () => {
    setModalVisible(false);
    setCart([]);
    alert("Seu pedido foi finalizado com sucesso! 🎉");
  };

  return (
    <div style={{ backgroundColor: 'var(--homeBackground)', minHeight: '100vh' }}>
      <Header />
      <div style={{ padding: '1rem' }}>
        {cart.length === 0 ? (
          <div style={{ textAlign: 'center', color: 'gray', margin: '20px 0' }}>Seu carrinho está vazio.</div>
        ) : (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cart.map((item) => (
                <div key={item.id} style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <img src={item.imagemUrl} alt={item.descricao} style={{ width: '80px', height: '80px' }} />
                    <div>
                      <div style={{ color: '#4a5568', fontSize: '14px' }}>{item.descricao}</div>
                      <div style={{ color: 'black', fontSize: '16px', fontWeight: 'bold' }}>R$ {item.preco.toFixed(2)}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
                    <input
                      type="number"
                      value={quantities[item.id]}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      style={{ width: '60px', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                    <div style={{ marginLeft: 'auto', color: 'black', fontSize: '16px', fontWeight: 'bold' }}>
                      R$ {(parseInt(quantities[item.id] || "1", 10) * item.preco).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '4px', marginTop: '1rem' }}>
              <div style={{ textAlign: 'center', color: '#4a5568', fontSize: '16px', fontWeight: 'bold' }}>TOTAL</div>
              <div style={{ textAlign: 'center', color: 'black', fontSize: '30px', fontWeight: 'bold' }}>R$ {total.toFixed(2)}</div>
              <button
                style={{ backgroundColor: '#F8375D', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', width: '100%', marginTop: '1rem' }}
                onClick={handleFinalizeOrder}
              >
                FINALIZAR PEDIDO
              </button>
            </div>
          </>
        )}
      </div>

      {isModalVisible && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '1rem' }}>Pedido Finalizado! 🎉</div>
            <div style={{ color: '#4a5568', marginBottom: '1rem' }}>Obrigado por comprar conosco! Seu pedido foi registrado.</div>
            <button
              style={{ backgroundColor: '#F8375D', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px' }}
              onClick={confirmOrder}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartScreen;