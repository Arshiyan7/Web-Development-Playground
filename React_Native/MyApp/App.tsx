import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './src/Retail_Inventory_Manager/Home';
import LowStock from './src/Retail_Inventory_Manager/lowStock';
import products from './src/Retail_Inventory_Manager/products';
import AddItem from './src/Retail_Inventory_Manager/AddItem';

const Stack = createNativeStackNavigator();

export default function App() {
  const [items, setItems] = useState(products);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadSucceeded, setLoadSucceeded] = useState(false);

  useEffect(() => {
    async function saveItems() {
      if (!isLoaded || !loadSucceeded) {
        return;
      }
      await AsyncStorage.setItem('inventory', JSON.stringify(items));
    }

    saveItems();
  }, [items, isLoaded,loadSucceeded]);

  useEffect(() => {
    async function loadItems() {
      try {
        const savedData = await AsyncStorage.getItem('inventory');
        if (savedData) {
          const data = JSON.parse(savedData);
          setItems(data);
        }
        setLoadSucceeded(true)
      } catch (error) {
        console.error('Something went wrong', error);
      } finally {
        setIsLoaded(true);
      }
    }
    loadItems();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            title: 'Retail Shop',
            headerShadowVisible: false,
          }}
        >
          {props => <Home {...props} items={items} setItems={setItems} />}
        </Stack.Screen>

        <Stack.Screen
          name="LowStock"
          options={{
            title: 'Low Stock',
            headerShadowVisible: false,
            animation: 'fade',
          }}
        >
          {props => <LowStock {...props} items={items} setItems={setItems} />}
        </Stack.Screen>

        <Stack.Screen
          name="AddItem"
          options={{
            title: 'Add Items',
            headerShadowVisible: false,
            animation: 'fade',
          }}
        >
          {props => <AddItem {...props} items={items} setItems={setItems} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
