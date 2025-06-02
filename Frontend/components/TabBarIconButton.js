import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TabBarIconButton = ({ focused, icon, label }) => {
    return (
        <View style={{
            marginTop: 50,
            height: 60,
            width: 60,
            borderRadius: 14,
            backgroundColor: focused ? '#C73636' : 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Ionicons name={icon} size={24} color="#FFFFFF" />
            {focused && <Text style={{ color: '#FFFFFF', fontSize: 12 }}>{label}</Text>}
        </View>
    );
};

export default TabBarIconButton;
