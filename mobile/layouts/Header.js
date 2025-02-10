import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import tw from '../lib/tailwind';

import { useCart } from '../context/CartContext';
import Logo from '../assets/LogoQuality.png';
import CartIcon from '../assets/CartIcon.png'; // Ícone do carrinho

const Header = () => {
  const navigation = useNavigation();
  const { cart } = useCart(); // Pegando o carrinho do contexto

  return (
    <View style={tw`bg-headerBackground flex flex-row justify-between items-center py-4 px-6`}>
      {/* Logo */}
      <TouchableOpacity onPress={() => navigation.navigate('Shoes', { cart })}>
      <Image source={Logo} style={styles.image} resizeMode="contain"/>
      </TouchableOpacity>

      {/* Botão do Carrinho */}
      <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Cart', { cart })}>
        {/* Ícone do Carrinho */}
        <Image source={CartIcon} style={styles.cartIcon} resizeMode="contain" />
        
        {/* Badge com a contagem de itens no carrinho */}
        {cart.length > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{cart.length}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: { 
    width: 187,  
    height: 23.85, 
  },
  cartButton: {
    position: 'relative', // Para posicionar o badge dentro do botão
  },
  cartIcon: {
    width: 24, // Tamanho do ícone do carrinho
    height: 26,
  },
  badge: {
    position: 'absolute',
    top: -5,  // Posicionamento superior
    right: -5, // Posicionamento lateral
    backgroundColor: '#F8375D', // Cor da bolinha
    borderRadius: 12, // Torna a bolinha redonda
    width: 18,  // Largura da bolinha
    height: 18, // Altura da bolinha
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Header;
