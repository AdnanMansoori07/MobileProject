import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const colours = {
    darkgray: '#262626'
}

const userName = 'User';

const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning'
    if (hour < 17) return 'Good afternoon'
    if (hour < 24) return 'Good evening'
}

const HomeScreen = () => {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.greeting}>{getGreeting()}, {userName}</Text>
                <Image
                    source={require('../assets/user-red.png')}
                    style={styles.profilePic}
                />
            </View>

            <View style={styles.buttonGrid}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Staff Directory')}>
                    <Ionicons name='people-outline' size={28} color={colours.darkgray} />
                    <Text style={styles.buttonText}>Staff Directory</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Intranet')}>
                    <Ionicons name='globe-outline' size={28} color={colours.darkgray} />
                    <Text style={styles.buttonText}>Intranet</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
                    <Ionicons name='person-outline' size={28} color={colours.darkgray} />
                    <Text style={styles.buttonText}>Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.logoutButton]}>
                    <Ionicons name='log-out-outline' size={28} color={'#FFFFFF'} />
                    <Text style={styles.logoutText}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    header: {
        backgroundColor: colours.darkgray,
        padding: 20,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    greeting: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold'
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
        rowGap: 10,
        columnGap: 10,
        marginTop: 20
    },

    button: {
        flexBasis: '48%',
        aspectRatio: 1,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: colours.darkgray,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    logoutButton: {
        backgroundColor: '#941A1D',
        flexBasis: '48%',
        aspectRatio: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    logoutText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default HomeScreen;