import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import DepartmentDropdown from '../components/DepartmentDropdown';
import { FontSizeContext } from '../components/FontSizeContext';

const colours = {
    darkgray: "#262626"
}

const departments = [
    { id: 0, name: "General" },
    { id: 1, name: "Information Communications Technology" },
    { id: 2, name: "Finance" },
    { id: 3, name: "Marketing" },
    { id: 4, name: "Human Resources" }
];

const AddStaff = () => {
    const navigation = useNavigation();
    const { fontSize } = useContext(FontSizeContext);

    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [postcode, setPostcode] = React.useState('');
    const [city, setCity] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [department, setDepartment] = React.useState(departments[0].id);
    const [state, setState] = React.useState('');

    const handleSave = () => {
        const payload = `name=${name}&phone=${phone}&department=${department}&addressStreet=${address}&addressCity=${city}&addressState=&addressZIP=${postcode}&addressCountry=${country}&addressState=${state}`;

        fetch('http://localhost:44374/WebService1.asmx/AddPerson', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: payload
        })
            .then(response => response.text())
            .then(text => {
                console.log('Saved', text);
                alert("Staff saved")
                navigation.goBack();
            })
            .catch(error => {
                console.error('Error saving staff: ', error)
            })
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={[styles.headerText, { fontSize }]}>
                    Add Staff
                </Text>
                <Image
                    source={require('../assets/user-profile-pic.png')}
                    style={styles.profilePic}
                />
            </View>

            <View style={styles.profileImageWrapper}>
                <Image source={require('../assets/user-red.png')} style={styles.profileImage} />
            </View>

            <View style={styles.inputBox}>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    placeholder='Name'
                    placeholderTextColor='#888'
                    style={[styles.input, { fontSize }]}
                />
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    value={phone}
                    onChangeText={setPhone}
                    placeholder='Phone Number'
                    placeholderTextColor='#888'
                    style={[styles.input, { fontSize }]}
                />
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    value={address}
                    onChangeText={setAddress}
                    placeholder='Address'
                    placeholderTextColor='#888'
                    style={[styles.input, { fontSize }]}
                />
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    value={postcode}
                    onChangeText={setPostcode}
                    placeholder='Postcode'
                    placeholderTextColor='#888'
                    style={[styles.input, { fontSize }]}
                />
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    value={city}
                    onChangeText={setCity}
                    placeholder='City'
                    placeholderTextColor='#888'
                    style={[styles.input, { fontSize }]}
                />
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    value={state}
                    onChangeText={setState}
                    placeholder='State'
                    placeholderTextColor='#888'
                    style={[styles.input, { fontSize }]}
                />
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    value={country}
                    onChangeText={setCountry}
                    placeholder='Country'
                    placeholderTextColor='#888'
                    style={[styles.input, { fontSize }]}
                />
            </View>

            <DepartmentDropdown
                value={department}
                onChange={setDepartment}
                departments={departments}
                fontSize={fontSize}
            />
            <TouchableOpacity
                style={styles.saveButton}
                onPress={() => handleSave()}
            >
                <Text style={[styles.saveButtonText, { fontSize }]}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.saveButton}
                onPress={() => navigation.goBack()}
            >
                <Text style={[styles.saveButtonText, { fontSize }]}>Back</Text>
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
        fontWeight: 'bold',
        fontFamily: 'Trebuchet MS',
    },
});

export default AddStaff;
