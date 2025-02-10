import React, { useState, useMemo } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TextInput, TouchableOpacity, Modal, Alert } from 'react-native';
import tw from '../lib/tailwind';
import Header from '../layouts/Header';
import { useCart } from '../context/CartContext';

const CartScreen = ({ route }) => {
  const { cart, setCart } = useCart(); // Pegando do contexto global

  // Estado para armazenar a quantidade de cada item no carrinho
  const [quantities, setQuantities] = useState(cart.reduce((acc, item) => {
    acc[item.id] = "1"; // Inicialmente, cada item tem quantidade "1" como string
    return acc;
  }, {}));

  // Estado para controle do modal
  const [isModalVisible, setModalVisible] = useState(false);

  // Função para atualizar a quantidade
  const handleQuantityChange = (id, value) => {
    // Permite valores vazios para evitar o problema ao apagar tudo
    if (value === "" || (/^\d+$/.test(value) && parseInt(value, 10) > 0)) {
      setQuantities((prev) => ({ ...prev, [id]: value }));
    }
  };

  // Calcular o total do carrinho
  const total = useMemo(() => {
    return cart.reduce((sum, item) => {
      return sum + (parseInt(quantities[item.id] || "1", 10) * item.preco);
    }, 0);
  }, [cart, quantities]);

  // Função para finalizar pedido
  const handleFinalizeOrder = () => {
    setModalVisible(true);
  };

  // Função para confirmar pedido e limpar carrinho
  const confirmOrder = () => {
    setModalVisible(false);
    setCart([]); // Esvazia o carrinho
    Alert.alert("Sucesso", "Seu pedido foi finalizado com sucesso! 🎉");
  };

  return (
    <View style={[tw`bg-gray-700`]}>
    <View style={[tw`bg-homeBackground self-center min-w-[375px] flex-grow min-h-screen`]}>
      <Header/>

      <View style={[styles.container]}>
        <View style={[tw`bg-white rounded-[4px]`]}>
        {cart.length === 0 ? (
          <Text style={styles.emptyText}>Seu carrinho está vazio.</Text>
        ) : (
          <>
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
                    <Text style={tw`text-black text-[16px] font-bold text-left`}>R$ {item.preco.toFixed(2)}</Text>
                  </div>
                </div>
                <div style={tw`flex bg-quantityBackground h-[40px] items-center rounded-[4px]`}>
                  <TextInput
                    style={tw`text-quantityTextGray w-[51px] h-[26px] bg-white border-[1px] border-quantityOutlineGray rounded-[4px] text-[14px] font-normal ml-8 text-center focus:border-[2px] focus:border-quantityOutlineGray`}
                    keyboardType="numeric"
                    value={quantities[item.id]}
                    onChangeText={(value) => handleQuantityChange(item.id, value)}
                    onBlur={() => {
                      // Se o campo ficar vazio, volta para 1
                      if (quantities[item.id] === "") {
                        setQuantities((prev) => ({ ...prev, [item.id]: "1" }));
                      }
                    }}
                  />
                  <Text style={tw`text-black text-[16px] font-bold ml-auto mr-3`}>R${(parseInt(quantities[item.id] || "1", 10) * item.preco).toFixed(2)}</Text>
                </div>
              </View>
            )}
          />
          
          {/* Total Geral do Carrinho */}
          <View style={tw`bg-white w-[305px] self-center`}>
            <View style={tw`my-4`}>
              <Text style={tw`text-totalPriceGray text-[16px] font-bold text-center`}>
                TOTAL
              </Text>
              <Text style={tw`text-black text-[30px] font-bold text-center`}>
                R$ {total.toFixed(2)}
              </Text>
            </View>
            <TouchableOpacity style={tw`bg-redButton rounded-4px mb-4 p-[10px]`}>
              <Text style={tw`text-center text-white font-bold text-[14px]`} onPress={handleFinalizeOrder}>FINALIZAR PEDIDO</Text>
            </TouchableOpacity>
          </View>
          </>
            )}
        </View>
      </View>

    </View>

    {/* Modal de Confirmação */}
    <Modal visible={isModalVisible} transparent animationType="slide">
      <View style={[styles.modalContainer, tw`self-center w-[375px]`]}>
        <View style={styles.modalContent}>
          <Text style={tw`text-black text-[20px] font-bold text-center`}>
            Pedido Finalizado! 🎉
          </Text>
          <Text style={tw`text-gray-500 text-[16px] text-center mt-2`}>
            Obrigado por comprar conosco! Seu pedido foi registrado.
          </Text>
          <TouchableOpacity 
            style={tw`bg-redButton rounded-[4px] mt-4 p-[10px]`}
            onPress={confirmOrder}
          >
            <Text style={tw`text-center text-white px-2 font-bold text-[14px]`}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>

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
  modalContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: { 
    backgroundColor: 'white', 
    padding: 20, 
    borderRadius: 10, 
    width: 300, 
    alignItems: 'center' 
  }
});

export default CartScreen;
