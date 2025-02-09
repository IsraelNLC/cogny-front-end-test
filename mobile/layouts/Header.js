import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import tw from '../lib/tailwind';

import { useCart } from '../context/CartContext';
import Logo from '../assets/LogoQuality.png';

const Header = () => {
  const navigation = useNavigation();
  const { cart } = useCart(); // Pegando o carrinho do contexto

    return (
        <View style={[styles.container, tw`bg-headerBackground flex flex-row items-center p-4`]}>
            {/* Imagem ajustada para ocupar todo o espaço sem cortes */}
            <Image source={Logo} style={styles.image} resizeMode="contain" />
            <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Cart', { cart })}>
                <Text style={styles.cartText}>🛒 Ir para o Carrinho ({cart.length})</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        // alignItems: 'center', // Centraliza a imagem no eixo vertical
        // justifyContent: 'center', // Centraliza no eixo horizontal
        height: 84, // Altura do Header
    },
    image: { 
        width: 187,  // Ajuste fino no tamanho
        height: 23.85, 
    },
    cartButton: {
        display: 'flex'
    },
    cartText: {
        display: 'flex'
    }
});

export default Header;
