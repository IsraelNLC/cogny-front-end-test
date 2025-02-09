import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const CartScreen = ({ route }) => {
  const { cart } = route.params || { cart: [] };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho 🛒</Text>

      {cart.length === 0 ? (
        <Text style={styles.emptyText}>Seu carrinho está vazio.</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Text>{item.descricao}</Text>
              <Text>{item.preco}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: 'white' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  emptyText: { fontSize: 16, color: 'gray', textAlign: 'center', marginTop: 20 },
  cartItem: { padding: 10, borderBottomWidth: 1, borderColor: '#ddd' },
});

export default CartScreen;
