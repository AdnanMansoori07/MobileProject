import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontSizeContext } from '../components/FontSizeContext';

const colours = {
    darkgray: '#262626',
    red: '#ff3b3b',
};

const dummyStaffList = [
    { name: 'Workplace Induction' },
    { name: 'Health and Safety Training' },
    { name: 'Fire Safety Procedures' },
    { name: 'First Aid Basics' },
    { name: 'Customer Service Skills' },
    { name: 'Data Privacy and Security' },
    { name: 'Manual Handling Training' },
    { name: 'Harassment Awareness' },
    { name: 'Cybersecurity Essentials' },
    { name: 'Emergency Evacuation Drill' },
    { name: 'Infection Control Training' },
    { name: 'Conflict Resolution Skills' },
    { name: 'Diversity & Inclusion Workshop' },
    { name: 'Time Management Tips' },
    { name: 'Ethics and Code of Conduct' },
    { name: 'Leadership Development Program' },
    { name: 'Performance Management Process' },
    { name: 'Communication Skills Training' },
    { name: 'Remote Work Best Practices' },
    { name: 'Using Company Software' }
];

const Training = () => {
    const navigation = useNavigation();
    const { fontSize } = useContext(FontSizeContext);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={[styles.headerText, { fontSize }]}>Training</Text>
                <Image
                    source={require('../assets/user-profile-pic.png')}
                    style={styles.profilePic}
                />
            </View>

            <View style={styles.searchBar}>
                <Ionicons name="search-outline" size={fontSize + 4} color='#888' style={{ marginRight: 8 }} />
                <TextInput placeholder="Search.."
                    placeholderTextColor="#888"
                    style={[styles.searchInput, { fontSize }]} />
            </View>

            <FlatList
                data={dummyStaffList}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ paddingBottom: 90 }}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card}>
                        <View style={styles.cardLeft}>
                            <Ionicons name='library-outline' size={fontSize + 12} color="#262626" style={{ marginRight: 8 }} />
                            <Text style={[styles.cardText, { fontSize }]}>{item.name}</Text>
                        </View>
                        <Ionicons name="download-outline" size={fontSize + 4} color="#262626" />
                    </TouchableOpacity>
                )}
                ListFooterComponent={(
                    <View style={styles.bottomButtons}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={[styles.backLink, { fontSize }]}>Back</Text>
                        </TouchableOpacity>
                    </View>
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
    backLink: {
        color: colours.red,
        fontFamily: 'Trebuchet MS',
        fontWeight: 'bold',
        marginTop: 10,
        alignSelf: 'flex-start',
    },
    bottomButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginTop: 10
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
    divider: {
        height: 1,
        backgroundColor: '#262626',
        marginVertical: 20,
        opacity: 0.5
    }
});

export default Training;
