import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

// --- INVENTORY APP IMPORTS (Kept safe for later) ---
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Home from './src/Retail_Inventory_Manager/Home';
// import LowStock from './src/Retail_Inventory_Manager/lowStock';
// import products from './src/Retail_Inventory_Manager/products';
// import AddItem from './src/Retail_Inventory_Manager/AddItem';

// --- PRACTICE IMPORT ---
import Day1Drills from './src/practice/Day1Drills';

export default function App() {
  // --- INVENTORY APP STATE (Kept safe) ---
  // const [items, setItems] = useState(products);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [loadSucceeded, setLoadSucceeded] = useState(false);

  // useEffect(() => {
  //   async function saveItems() {
  //     if (!isLoaded || !loadSucceeded) return;
  //     await AsyncStorage.setItem('inventory', JSON.stringify(items));
  //   }
  //   saveItems();
  // }, [items, isLoaded, loadSucceeded]);

  // useEffect(() => {
  //   async function loadItems() {
  //     try {
  //       const savedData = await AsyncStorage.getItem('inventory');
  //       if (savedData) setItems(JSON.parse(savedData));
  //       setLoadSucceeded(true);
  //     } catch (error) {
  //       console.error('Something went wrong', error);
  //     } finally {
  //       setIsLoaded(true);
  //     }
  //   }
  //   loadItems();
  // }, []);

  // --- RENDER DRILL ---
  return (
    <SafeAreaView style={styles.container}>
      <Day1Drills />
    </SafeAreaView>
  );

  /* --- YOUR INVENTORY NAVIGATOR (Uncomment later to restore) ---
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ title: 'Retail Shop', headerShadowVisible: false }}>
          {props => <Home {...props} items={items} setItems={setItems} />}
        </Stack.Screen>
        <Stack.Screen name="LowStock" options={{ title: 'Low Stock', headerShadowVisible: false, animation: 'fade' }}>
          {props => <LowStock {...props} items={items} setItems={setItems} />}
        </Stack.Screen>
        <Stack.Screen name="AddItem" options={{ title: 'Add Items', headerShadowVisible: false, animation: 'fade' }}>
          {props => <AddItem {...props} items={items} setItems={setItems} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
  */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});