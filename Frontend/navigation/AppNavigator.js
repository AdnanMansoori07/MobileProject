import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import StaffDirectoryScreen from '../screens/StaffDirectoryScreen';
import ViewStaffScreen from '../screens/ViewStaffScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StaffDirectory" component={StaffDirectoryScreen} />
        <Stack.Screen name="ViewStaff" component={ViewStaffScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
