import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TextInput } from 'react-native';
import tw from '../lib/tailwind';
import Header from '../layouts/Header';

const CartScreen = ({ route }) => {
  const { cart } = route.params || { cart: [] };

  return (
    <View style={[tw`bg-gray-700`]}>
    <View style={[tw`bg-homeBackground self-center min-w-[375px] flex-grow h-600px`]}>
      <Header/>

      <View style={[styles.container]}>
        <View style={[tw`bg-white rounded-[4px]`]}>
        {cart.length === 0 ? (
          <Text style={styles.emptyText}>Seu carrinho está vazio.</Text>
        ) : (
          <FlatList
            style={tw`rounded-[4px]`}
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={[styles.cartItem, tw`my-2 bg-white w-[305px] self-center`]}>
                <div style={tw`flex`}>
                  <Image source={item.imagemUrl} style={[styles.image, tw`self-center`]} resizeMode="contain" />
                  <div style={tw`flex flex-col ml-2 py-6`}>
                    <Text style={tw`text-itemDescriptionGray text-[14px] text-left`}>{item.descricao}</Text>
                    <Text style={tw`text-black text-[16px] font-bold text-left`}>{item.preco}</Text>
                  </div>
                </div>
                <div style={tw`flex bg-gray-200 h-[40px] items-center rounded-sm`}>
                  <TextInput
                    style={tw`text-black w-[51px] bg-white border-2 border-gray-100 rounded-sm text-[16px] font-bold ml-4`}
                    keyboardType="numeric"
                    // value={quantities[item.id]}
                    // onChangeText={(value) => handleQuantityChange(item.id, value)}
                    // onBlur={() => {
                    //   // Se o campo ficar vazio, volta para 1
                    //   if (quantities[item.id] === "") {
                    //     setQuantities((prev) => ({ ...prev, [item.id]: "1" }));
                    //   }
                    // }}
                  />
                  <Text style={tw`text-black text-[16px] font-bold ml-40`}>R$100,00</Text>
                </div>
              </View>
            )}
          />
        )}
        </View>
      </View>

    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20},
  emptyText: { fontSize: 16, color: 'gray', textAlign: 'center', marginVertical: 20},
  image: { 
    width: 80, 
    height: 80
  },
});

export default CartScreen;
