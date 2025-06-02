import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserProfile from '../screens/UserProfile'

const colours = {
    darkgray: '#262626',
    red: '#941A1D',
    lightgray: '#D9D9D9'
};

const screenWidth = Dimensions.get('window').width;

const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
};

const getGreetingIcon = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'sunny-outline';
    if (hour < 17) return 'partly-sunny-outline';
    return 'moon-outline';
};

const HomeScreen = () => {
    const navigation = useNavigation();
    const userName = 'Sabrina Carpenter'

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.greeting}>
                        <Ionicons name={getGreetingIcon()} size={20} color="#FFFFFF" style={{ position: 'relative', top: 3 }} />
                        {'\u00A0'}{getGreeting()}, {userName.split(' ')[0]}
                    </Text>
                    <Image source={require('../assets/user-red.png')} style={styles.profilePic} />
                </View>

                <View style={styles.buttonGrid}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Staff Directory')}>
                        <Ionicons name='business-outline' size={28} color={colours.darkgray} />
                        <Text style={styles.buttonText}>Staff Directory</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Intranet')}>
                        <Ionicons name='globe-outline' size={28} color={colours.darkgray} />
                        <Text style={styles.buttonText}>Intranet</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('User Profile')}>
                        <Ionicons name='person-outline' size={28} color={colours.darkgray} />
                        <Text style={styles.buttonText}>Profile</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.logoutButton}>
                        <Ionicons name='log-out-outline' size={28} color={'#FFFFFF'} />
                        <Text style={styles.logoutText}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        backgroundColor: colours.darkgray,
        padding: 20,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    greeting: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    profilePic: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    buttonGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        rowGap: 12,
        columnGap: 12,
    },
    button: {
        width: (screenWidth - 60) / 2,
        aspectRatio: 1,
        backgroundColor: colours.lightgray,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: colours.darkgray,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8,
    },
    logoutButton: {
        backgroundColor: colours.red,
        width: (screenWidth - 60) / 2,
        aspectRatio: 1,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    logoutText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8,
    },
});

export default HomeScreen;
