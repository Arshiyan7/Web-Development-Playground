import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
// import Concepts from './src/concepts'
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Search from './src/screens/Search';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign'; 

const stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
    </stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='Home' 
    screenOptions={{tabBarActiveTintColor : 'purple', 
    tabBarInactiveTintColor : 'black',
    tabBarStyle :{
      height : 100,
      borderWidth : 1,
      borderColor : 'red',
    },
    tabBarLabelStyle : {
      fontSize : 14
    }
    }} > 
      <Tab.Screen name="Home" component={Home} options={{ tabBarActiveTintColor: 'red',
       tabBarIcon : ({color}) =>(
        <Icon name="home" size={25} color={color} />
      )}} />
      <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon : ({color}) =>(
        <Icon name="user" size={25} color={color} />
      )}} />
      <Tab.Screen name="Search" component={Search}  options={{tabBarIcon : ({color}) =>(
        <Icon name="search1" size={25} color={color} />
      )}}/>
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
