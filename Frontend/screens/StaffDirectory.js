import React, { useState, useCallback, useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontSizeContext } from '../components/FontSizeContext';

const colours = {
    darkgray: '#262626'
}

const API_URL = 'http://localhost:44374/WebService1.asmx/GetPeople';

const StaffDirectory = () => {
    const [staffList, setStaffList] = useState([]);
    const navigation = useNavigation();
    const { fontSize } = useContext(FontSizeContext);

    useFocusEffect(
        useCallback(() => {
            fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            })
                .then(response => response.text())
                .then(text => {
                    const endIdx = text.indexOf(']') + 1;
                    if (endIdx > 0) {
                        const jsonStr = text.substring(0, endIdx);
                        const data = JSON.parse(jsonStr);
                        setStaffList(data);
                    } else {
                        console.log("Failed to extract JSON array:", text);
                    }
                })
                .catch(err => {
                    console.log("Fetch error:", err);
                });
        }, [])
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={[styles.headerText, { fontSize }]}>Staff Directory</Text>
                <Image
                    source={require('../assets/user-profile-pic.png')}
                    style={styles.profilePic}
                />
            </View>

            <View style={styles.searchBar}>
                <Ionicons name="search-outline" size={fontSize + 4} color='#888' style={{ marginRight: 8 }} />
                <TextInput
                    placeholder="Search.."
                    placeholderTextColor="#888"
                    style={[styles.searchInput, { fontSize }]}
                />
            </View>

            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Add Profile')}>
                <View style={styles.cardLeft}>
                    <Image source={require('../assets/user-red.png')} style={styles.profileIcon} />
                    <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                        <Text style={[styles.cardText, { fontSize }]}>Add Staff</Text>
                    </View>
                </View>
                <Ionicons name="add" size={fontSize + 8} color="#262626" />
            </TouchableOpacity>

            <View style={styles.divider} />

            <FlatList
                data={staffList}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingBottom: 90 }}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate('Staff Profile', {
                            id: item.id,
                            name: item.name,
                            phone: item.phone,
                            department: item.department?.name,
                            addressStreet: item.addressStreet || '',
                            addressCity: item.addressCity || '',
                            addressState: item.addressState || '',
                            addressZIP: item.addressZIP || '',
                            addressCountry: item.addressCountry || ''
                        })}
                    >
                        <View style={styles.cardLeft}>
                            <Image source={require('../assets/user-red.png')} style={styles.profileIcon} />
                            <Text style={[styles.cardText, { fontSize }]}>{item.name}</Text>
                        </View>
                        <Ionicons name="ellipsis-vertical" size={fontSize + 4} color="#262626" />
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
}

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
    headerText: {
        color: '#FFFFFF',
        fontFamily: 'Trebuchet MS',
        fontWeight: 'bold'
    },
    profilePic: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    searchBar: {
        flexDirection: 'row',
        backgroundColor: "#D9D9D9",
        borderRadius: 25,
        paddingHorizontal: 16,
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    searchInput: {
        flex: 1,
        fontFamily: 'Trebuchet MS',
        color: '#000'
    },
    card: {
        backgroundColor: '#D9D9D9',
        borderRadius: 12,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#262626',
    },
    cardLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardText: {
        marginLeft: 10,
        fontWeight: 'bold',
        color: '#262626',
        fontFamily: 'Trebuchet MS',
        marginTop: 2
    },
    profileIcon: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#fff',
    },
    divider: {
        height: 1,
        backgroundColor: '#262626',
        marginVertical: 20,
        opacity: 0.5
    }
});

export default StaffDirectory;
