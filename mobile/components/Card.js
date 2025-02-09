import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import tw from '../lib/tailwind';

const Card = ({ descricao, preco, imagem, onAddToCart  }) => {
  return (
    <View style={[styles.card, tw`bg-white`]}>
      {/* Exibir a imagem */}
      {imagem ? (
        <Image source={{ uri: imagem }} style={styles.image} />
      ) : (
        <Text style={styles.errorText}>Imagem não disponível</Text>
      )}

      {/* Exibir descrição e preço */}
      <Text style={styles.description}>{descricao}</Text>
      <Text style={styles.price}>{preco}</Text>

      {/* Botão de adicionar ao carrinho */}
      <TouchableOpacity style={styles.button} onPress={onAddToCart}>
        <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { 
    padding: 15, 
    borderWidth: 1, 
    borderRadius: 8, 
    marginBottom: 10,
    alignItems: 'center'
  },
  image: { 
    width: 200, 
    height: 200, 
    marginBottom: 10
  },
  description: { 
    fontSize: 18 
  },
  price: { 
    fontSize: 16, 
    color: 'green', 
    marginBottom: 10 
  },
  button: { 
    backgroundColor: 'blue', 
    padding: 10, 
    borderRadius: 5 
  },
  buttonText: { 
    color: 'white', 
    textAlign: 'center' 
  },
  errorText: { 
    color: 'red', 
    fontSize: 14 
  }
});

export default Card;
