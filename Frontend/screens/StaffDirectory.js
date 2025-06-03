import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const colours = {
    darkgray: '#262626'
}

const dummyStaffList = [
  {
    id: '1',
    name: 'Taylor Swift',
    phone: '02 2000 0022',
    email: 'taylorswift@roi.com.au',
    department: 'Information Technology'
  },
  {
    id: '2',
    name: 'Dua Lipa',
    phone: '02 3000 0033',
    email: 'dualipa@roi.com.au',
    department: 'Marketing'
  },
  {
    id: '3',
    name: 'Will Ramos',
    phone: '02 4000 0044',
    email: 'willramos@roi.com.au',
    department: 'Finance'
  },
  {
    id: '4',
    name: 'Alan Walker',
    phone: '02 5000 0055',
    email: 'alanwalker@roi.com.au',
    department: 'Security'
  }
];


const StaffDirectory = () => {

    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Staff Directory
                </Text>
                <Image
                    source={require('../assets/user-red.png')}
                    style={styles.profilePic}
                />
            </View>

            <View style={styles.searchBar}>
                <Ionicons name="search-outline" size={20} color='#888' style={{ marginRight: 8 }} />
                <TextInput placeholder="Search.."
                    placeholderTextColor="#888"
                    style={styles.searchInput} />
            </View>

            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Add Profile')}>
                <View style={styles.cardLeft}>
                    <View style={{ justifyContent: 'center' }}>
                        <Image source={require('../assets/user-red.png')} style={styles.profileIcon} />
                    </View>
                    <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                        <Text style={styles.cardText}>Add Staff</Text>
                    </View>
                </View>
                <Ionicons name="add" size={24} color="#262626" />
            </TouchableOpacity>

            <View style={styles.divider} />

            <FlatList
                data={dummyStaffList}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingBottom: 20 }}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate('Staff Profile', {
                            name: item.name,
                            phone: item.phone,
                            email: item.email,
                            department: item.department
                        })}
                    >
                        <View style={styles.cardLeft}>
                            <Image source={require('../assets/user-red.png')} style={styles.profileIcon} />
                            <Text style={styles.cardText}>{item.name}</Text>
                        </View>
                        <Ionicons name="ellipsis-vertical" size={20} color="#262626" />
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )
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
        fontSize: 16,
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
        fontSize: 16,
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
        fontSize: 16,
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