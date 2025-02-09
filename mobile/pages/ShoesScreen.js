import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from '../lib/tailwind';

import { useCart } from '../context/CartContext';
import Header from '../layouts/Header';
import Card from '../components/Card';

const mockProducts = [
  { id: '1', descricao: 'Tênis De Caminhada Leve Confortável', preco: 199.99 , imagemUrl: 'https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png' },
  { id: '2', descricao: 'Sapato Social', preco: 249.99, imagemUrl: 'https://via.placeholder.com/150' },
  { id: '3', descricao: 'Chinelo Casual', preco: 49.99, imagemUrl: 'https://via.placeholder.com/150' },
];

const ShoesScreen = () => {
  const navigation = useNavigation();
  const { cart, addToCart } = useCart();

  return (
    <View style={[tw`bg-gray-700`]}>
    <View style={[tw`bg-homeBackground self-center min-w-[375px]`]}>
      <Header />
      <View style={[styles.container]}>

        {/*       
        <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Cart', { cart })}>
          <Text style={styles.cartText}>🛒 Ir para o Carrinho ({cart.length})</Text>
        </TouchableOpacity> */}

        <FlatList
          data={mockProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card 
              descricao={item.descricao} 
              preco={item.preco} 
              imagem={item.imagemUrl} 
              onAddToCart={() => addToCart(item)} // Passando a função addToCart para o Card
            />
          )}
        />
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  cartButton: { backgroundColor: 'black', padding: 10, borderRadius: 5, marginBottom: 10 },
  cartText: { color: 'white', textAlign: 'center', fontSize: 16 },
});

export default ShoesScreen;
