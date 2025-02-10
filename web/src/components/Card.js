import React from 'react';

const Card = ({ descricao, preco, imagem, onAddToCart }) => {
  return (
    <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '4px', width: '338px', marginBottom: '1rem' }}>
      {imagem ? (
        <img src={imagem} alt={descricao} style={{ width: '217px', height: '200px', marginBottom: '1rem' }} />
      ) : (
        <div style={{ color: 'red', fontSize: '14px' }}>Imagem não disponível</div>
      )}
      <div style={{ padding: '0.5rem' }}>
        <div style={{ color: '#4a5568', fontSize: '16px' }}>{descricao}</div>
        <div style={{ color: 'black', fontSize: '21px', fontWeight: 'bold', margin: '0.5rem 0' }}>R$ {preco}</div>
      </div>
      <button
        style={{ backgroundColor: '#F8375D', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', width: '100%', marginTop: '1rem', position: 'relative', border: "none" }}
        onClick={onAddToCart}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, width: '81px', height: '100%', backgroundColor: 'black', opacity: '0.2', borderRadius: '4px 0 0 4px' }}></div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '81px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>1</div>
        <span style={{ marginLeft: '81px' }}>ADICIONAR</span>
      </button>
    </div>
  );
};

export default Card;