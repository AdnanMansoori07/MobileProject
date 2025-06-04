import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    { name: 'Bullying and Harassment Awareness' },
    { name: 'Cybersecurity Essentials' },
    { name: 'Emergency Evacuation Drill' },
    { name: 'Infection Control Training' },
    { name: 'Conflict Resolution Skills' },
    { name: 'Diversity and Inclusion Workshop' },
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
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Training</Text>
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

            <FlatList
                data={dummyStaffList}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ paddingBottom: 20 }}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card}>
                        <View style={styles.cardLeft}>
                            <Ionicons name='library-outline' size={28} color="#262626" style={{ marginRight: 8 }} />
                            <Text style={styles.cardText}>{item.name}</Text>
                        </View>
                        <Ionicons name="download-outline" size={20} color="#262626" />
                    </TouchableOpacity>
                )}
                ListFooterComponent={(
                    <View style={styles.bottomButtons}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={styles.backLink}>Back</Text>
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
    backLink: { // <-- Fixed name
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
    divider: {
        height: 1,
        backgroundColor: '#262626',
        marginVertical: 20,
        opacity: 0.5
    }
});

export default Training;
