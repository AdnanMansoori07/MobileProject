import React from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import MainNavigator from './navigation/MainNavigator';
import { FontSizeProvider } from './components/FontSizeContext';


export default function App() {
  return <FontSizeProvider>
    <MainNavigator />
  </FontSizeProvider>
}