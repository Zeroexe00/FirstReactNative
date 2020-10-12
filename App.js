import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen  from './Screens/LoginScreen'
import MainScreen  from './Screens/MainScreen'
import RecipesScreen  from './Screens/RecipesScreen'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Recetas" component={RecipesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}