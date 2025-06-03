import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import StaffDirectory from '../screens/StaffDirectory';
import StaffProfile from '../screens/StaffProfile';
import Intranet from '../screens/Intranet';
import Settings from '../screens/Settings';
import TabBarIconButton from '../components/TabBarIconButton';
import UserProfile from '../screens/UserProfile';
import EditStaff from '../screens/EditStaff';
import AddStaff from '../screens/AddStaff';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
        backgroundColor: '#941A1D',
        height: 90,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'absolute',
        overflow: 'hidden',
      },
      tabBarItemStyle: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      tabBarShowLabel: false,
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabBarIconButton focused={focused} icon="home-outline" label="Home" />
        ),
      }}
    />
    <Tab.Screen
      name="Staff Directory"
      component={StaffDirectory}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabBarIconButton focused={focused} icon="search-outline" label="Directory" />
        ),
      }}
    />
    <Tab.Screen
      name="Intranet"
      component={Intranet}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabBarIconButton focused={focused} icon="globe-outline" label="Intranet" />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={Settings}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabBarIconButton focused={focused} icon="cog-outline" label="Settings" />
        ),
      }}
    />
  </Tab.Navigator>
);

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen name="Staff Profile" component={StaffProfile} />
        <Stack.Screen name="User Profile" component={UserProfile} />
        <Stack.Screen name="Edit Profile" component={EditStaff} />
        <Stack.Screen name="Add Profile" component={AddStaff} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
