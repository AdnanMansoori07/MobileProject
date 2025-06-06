import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const colours = {
    darkgray: "#262626"
}

const UserProfile = () => {

    const navigation = useNavigation();

    const [name, setName] = React.useState('Sabrina Carpenter');
    const [phone, setPhone] = React.useState('02 2000 2000');
    const [email, setEmail] = React.useState('sabrinacarpenter@roi.com.au');
    const [address, setAddress] = React.useState('123 LA Street');
    const [postcode, setPostcode] = React.useState('0000');
    const [city, setCity] = React.useState('Sydney');
    const [country, setCountry] = React.useState('Australia');
    const [department, setDepartment] = React.useState('Marketing');


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    My Profile
                </Text>
                <Image
                    source={require('../assets/user-profile-pic.png')}
                    style={styles.profilePic}
                />
            </View>

            <View style={styles.profileImageWrapper}>
                <Image source={require('../assets/user-profile-pic.png')} style={styles.profileImage} />
            </View>

            <View style={styles.inputBox}>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    placeholder={name}
                    placeholderTextColor='#888'
                    style={styles.input}
                />
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    value={phone}
                    onChangeText={setPhone}
                    placeholder={phone}
                    placeholderTextColor='#888'
                    style={styles.input}
                />
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder={email}
                    placeholderTextColor='#888'
                    style={styles.input}
                />
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    value={address}
                    onChangeText={setAddress}
                    placeholder={address}
                    placeholderTextColor='#888'
                    style={styles.input}
                />
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    value={postcode}
                    onChangeText={setPostcode}
                    placeholder={postcode}
                    placeholderTextColor='#888'
                    style={styles.input}
                />
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    value={city}
                    onChangeText={setCity}
                    placeholder={city}
                    placeholderTextColor='#888'
                    style={styles.input}
                />
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    value={country}
                    onChangeText={setCountry}
                    placeholder={country}
                    placeholderTextColor='#888'
                    style={styles.input}
                />
            </View>

            <View style={styles.inputBox}>
                <TextInput
                    value={department}
                    onChangeText={setDepartment}
                    placeholder={department}
                    placeholderTextColor='#888'
                    style={styles.input}
                />
            </View>
            <TouchableOpacity
                style={styles.saveButton}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
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
        backgroundColor: '#262626',
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
    inputBox: {
        backgroundColor: '#D9D9D9',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 10,
    },
    input: {
        fontSize: 16,
        fontFamily: 'Trebuchet MS',
        color: '#000'
    },
    profileImageWrapper: {
        backgroundColor: '#fff',
        borderRadius: 100,
        padding: 8,
        alignSelf: 'center',
        marginBottom: 16,
        marginTop: 16
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        resizeMode: 'cover'
    },
    saveButton: {
        marginTop: 20,
        backgroundColor: '#941A1D',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontFamily: 'Trebuchet MS',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default UserProfile;