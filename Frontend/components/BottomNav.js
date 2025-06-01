import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const ROI_COLORS = {
  red: '#941a1d',
  lightRed: '#c64c38',
  white: '#ffffff',
};

const BottomNav = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const current = route.name;

  const tabs = [
    { name: 'Home', icon: '🏠' },
    { name: 'StaffDirectory', icon: '🔍', label: 'Directory' },
    { name: 'Intranet', icon: '📄' },
    { name: 'Profile', icon: '🔔' },
  ];

  return (
    <View style={styles.navBar}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          onPress={() => navigation.navigate(tab.name)}
          style={[styles.navItem, current === tab.name && styles.activeNav]}
        >
          <Text style={styles.navIcon}>{tab.icon}</Text>
          <Text style={styles.navText}>
            {tab.label || tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    backgroundColor: ROI_COLORS.red,
    padding: 10,
    justifyContent: 'space-around',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 20,
    color: ROI_COLORS.white,
  },
  navText: {
    fontSize: 12,
    color: ROI_COLORS.white,
    fontFamily: 'Trebuchet MS',
  },
  activeNav: {
    backgroundColor: ROI_COLORS.lightRed,
    padding: 8,
    borderRadius: 20,
  },
});

export default BottomNav;
