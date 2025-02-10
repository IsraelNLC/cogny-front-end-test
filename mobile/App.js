// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { StyleSheet, StatusBar} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import tw from './lib/tailwind';
import { useDeviceContext } from 'twrnc';

import { CartProvider } from './context/CartContext';
import ShoesScreen from "./pages/ShoesScreen";
import CartScreen from "./pages/CartScreen";
import Header from './layouts/Header';

const Stack = createStackNavigator();

export default function app () {
  useDeviceContext(tw);
  return (
    <CartProvider>
      <NavigationContainer >
        <StatusBar barStyle="light-content" backgroundColor="#6200ee"/>
        <Stack.Navigator initialRouteName="Shoes" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Shoes" component={ShoesScreen}/>
          <Stack.Screen name="Cart" component={CartScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
