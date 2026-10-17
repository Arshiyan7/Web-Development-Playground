import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/shop/Home';
import LowStock from './src/shop/lowStock';
import products from './src/shop/products';
import AddItem from './src/shop/AddItem';

const Stack = createNativeStackNavigator();

export default function App() {
  const [items, setItems] = useState(products);

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
          {props => (
            <Home
              {...props}
              items={items}
              setItems={setItems}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="LowStock"
          options={{
            title: 'Low Stock',
            headerShadowVisible: false,
            animation: 'fade',
          }}
        >
          {props => (
            <LowStock
              {...props}
              items={items}
              setItems={setItems}
            />
          )}
        </Stack.Screen>
        
        <Stack.Screen
          name="AddItem"
          options={{
            title: 'Add Items',
            headerShadowVisible: false,
            animation: 'fade',
          }}
        >
          {props => (
            <AddItem
              {...props}
              items={items}
              setItems={setItems}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}