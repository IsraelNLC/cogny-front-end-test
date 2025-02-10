import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useCart } from '../context/CartContext';
import Header from '../layouts/Header';
import Card from '../components/Card';

const ShoesScreen = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsList);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--homeBackground)', minHeight: '100vh' }}>
      <Header />
      <div style={{ padding: '2rem' }}>
        {loading ? (
          <div>Carregando...</div>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {products.map((item) => (
              <Card
                key={item.id}
                descricao={item.descricao}
                preco={item.preco}
                imagem={item.imagemUrl}
                onAddToCart={() => addToCart(item)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoesScreen;