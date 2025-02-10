import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig"; // Firebase configurado
import tw from '../lib/tailwind';

import { useCart } from '../context/CartContext';
import Header from '../layouts/Header';
import Card from '../components/Card';

const ShoesScreen = () => {
  const navigation = useNavigation();
  const { addToCart } = useCart();

  // Estado para armazenar os produtos
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar os produtos do Firebase Firestore
  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsList);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os produtos.");
      console.error("Erro ao buscar produtos:", error);
    } finally {
      setLoading(false);
    }
  };

  // Chama a função para buscar os produtos ao montar o componente
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <View style={[styles.fontRobotoRegular ,tw`bg-gray-700`]}>
      <View style={[tw`bg-homeBackground self-center min-w-[375px] min-h-screen`]}>
        <Header />
        <View style={tw`flex-1 p-4`}>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <FlatList
              style={tw`rounded-[4px]`}
              data={products}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Card 
                  descricao={item.descricao} 
                  preco={item.preco} 
                  imagem={item.imagemUrl} 
                  onAddToCart={() => addToCart(item)}
                />
              )}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fontRobotoRegular: { fontFamily: "serif"},
  fontRobotoBold: { fontFamily: "Roboto_700Bold" }
})

export default ShoesScreen;
