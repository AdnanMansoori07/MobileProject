import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontSizeContext } from '../components/FontSizeContext';

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
    const userName = 'Sabrina Carpenter';

    const { fontSize } = useContext(FontSizeContext);

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={[styles.greeting, { fontSize }]}>
                        <Ionicons name={getGreetingIcon()} size={fontSize + 4} color="#FFFFFF" style={{ position: 'relative', top: 3 }} />
                        {'\u00A0'}{getGreeting()}, {userName.split(' ')[0]}
                    </Text>
                    <Image source={require('../assets/user-profile-pic.png')} style={styles.profilePic} />
                </View>

                <View style={styles.buttonGrid}>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Staff Directory')}>
                            <Ionicons name='business-outline' size={fontSize + 12} color={colours.darkgray} />
                            <Text style={[styles.buttonText, { fontSize }]} >Staff Directory</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Intranet')}>
                            <Ionicons name='globe-outline' size={fontSize + 12} color={colours.darkgray} />
                            <Text style={[styles.buttonText, { fontSize }]} >Intranet</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('User Profile')}>
                            <Ionicons name='person-outline' size={fontSize + 12} color={colours.darkgray} />
                            <Text style={[styles.buttonText, { fontSize }]} >Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.logoutButton]}>
                            <Ionicons name='log-out-outline' size={fontSize + 12} color={'#FFFFFF'} />
                            <Text style={[styles.logoutText, { fontSize }]} >Log Out</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.LogoContainer}>
                    <Image source={require('../assets/roi.png')} style={styles.roiLogo} />
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
    LogoContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    roiLogo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
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
        fontWeight: 'bold',
        fontFamily: 'Trebuchet MS',
    },
    profilePic: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    buttonGrid: {
        marginBottom: 24,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    button: {
        flex: 1,
        aspectRatio: 1,
        backgroundColor: colours.lightgray,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 6,
    },
    buttonText: {
        color: colours.darkgray,
        fontWeight: 'bold',
        fontFamily: 'Trebuchet MS',
        textAlign: 'center',
        marginTop: 8,
    },
    logoutButton: {
        backgroundColor: colours.red,
    },
    logoutText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontFamily: 'Trebuchet MS',
        textAlign: 'center',
        marginTop: 8,
    },
});

export default HomeScreen;
