import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import tw from '../lib/tailwind';

const Card = ({ descricao, preco, imagem, onAddToCart  }) => {
  return (
    <View style={[styles.card, tw`bg-white flex`]}>
      {/* Exibir a imagem */}
      {imagem ? (
        <Image source={{ uri: imagem }} style={[styles.image, tw`self-center`]} />
      ) : (
        <Text style={styles.errorText}>Imagem não disponível</Text>
      )}

      {/* Exibir descrição e preço */}
      <View style={tw`px-2`}>
      <Text style={[styles.description, tw`text-itemDescriptionGray`]}>{descricao}</Text>
      <Text style={[styles.price, tw`font-bold my-2`]}>R${preco}</Text>
      </View>

      {/* Botão de adicionar ao carrinho */}
      <TouchableOpacity style={[styles.button, tw`bg-redButton rounded-4px mt-2`]} onPress={onAddToCart}>
        {/* Fundo escuro com opacidade */}
        <View style={tw`absolute bg-black top-0 left-0 rounded-l-[4px] h-full w-[81px] opacity-20`} />

        {/* Texto da quantidade sem opacidade */}
        <View style={tw`absolute top-0 left-0 h-full w-[81px] flex items-center justify-center`}>
            <Text style={tw`text-white font-bold`}>1</Text>
        </View>

        <Text style={[styles.buttonText, tw`font-bold text-[14px] ml-14`]}>ADICIONAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height:358,
    width: 338,
    padding: 20, 
    borderWidth: 1, 
    borderRadius: 4, 
    marginBottom: 10
  },
  image: { 
    width: 217, 
    height: 200, 
    marginBottom: 10
  },
  description: { 
    fontSize: 16
  },
  price: { 
    fontSize: 21,
    marginBottom: 10
  },
  button: { 
    backgroundColor: 'blue', 
    padding: 10
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
