// Starting Point

import React from 'react';
import { StatusBar } from 'react-native';
import {StyleSheet, Text, View} from 'react-native';

import HomeScreen from './screens/HomeScreen';
import MainNavigator from './navigation/MainNavigator';


export default function App(){
  return <MainNavigator />
}
