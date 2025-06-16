import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import DepartmentDropdown from '../components/DepartmentDropdown';
import { FontSizeContext } from '../components/FontSizeContext';

const colours = {
    darkgray: "#262626"
};

const departments = [
    { id: 1, name: 'Information Communications Technology' },
    { id: 2, name: 'Finance' },
    { id: 3, name: 'Marketing' },
    { id: 4, name: 'Human Resources' }
];

const EditStaff = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { fontSize } = useContext(FontSizeContext);

    const {
        id = '',
        name: initName = '',
        phone: initPhone = '',
        department: initDepartmentName = '',
        addressStreet: initStreet = '',
        addressCity: initCity = '',
        addressState: initState = '',
        addressZIP: initZIP = '',
        addressCountry: initCountry = ''
    } = route.params || {};

    // Find id for prefill from incoming department name
    const initialDeptObj = departments.find(d => d.name === initDepartmentName);
    const initialDeptId = initialDeptObj ? initialDeptObj.id : '';

    // State
    const [name, setName] = useState(initName);
    const [phone, setPhone] = useState(initPhone);
    const [departmentId, setDepartmentId] = useState(initialDeptId);
    const [addressStreet, setAddressStreet] = useState(initStreet);
    const [addressCity, setAddressCity] = useState(initCity);
    const [addressState, setAddressState] = useState(initState);
    const [addressZIP, setAddressZIP] = useState(initZIP);
    const [addressCountry, setAddressCountry] = useState(initCountry);

    const handleSave = () => {
        if (!id) {
            alert("No staff ID found.");
            return;
        }
        if (!departmentId) {
            alert("Please select a department.");
            return;
        }
        const params =
            `id=${encodeURIComponent(id)}&` +
            `name=${encodeURIComponent(name)}&` +
            `phone=${encodeURIComponent(phone)}&` +
            `department=${departmentId}&` +
            `addressStreet=${encodeURIComponent(addressStreet)}&` +
            `addressCity=${encodeURIComponent(addressCity)}&` +
            `addressState=${encodeURIComponent(addressState)}&` +
            `addressZIP=${encodeURIComponent(addressZIP)}&` +
            `addressCountry=${encodeURIComponent(addressCountry)}`;

        fetch('http://localhost:44374/WebService1.asmx/UpdatePerson', {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: params
        })
            .then(res => res.text())
            .then(() => {
                navigation.goBack();
            })
            .catch(err => {
                alert('Failed to update staff: ' + err);
            });
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={[styles.headerText, { fontSize }]}>Edit Profile</Text>
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
                        placeholder="Name"
                        placeholderTextColor='#888'
                        style={[styles.input, { fontSize }]}
                    />
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                        value={phone}
                        onChangeText={setPhone}
                        placeholder="Phone"
                        placeholderTextColor='#888'
                        style={[styles.input, { fontSize }]}
                    />
                </View>

                <DepartmentDropdown
                    value={departmentId}
                    onChange={setDepartmentId}
                    departments={departments}
                    fontSize={fontSize}
                />

                <View style={styles.inputBox}>
                    <TextInput
                        value={addressStreet}
                        onChangeText={setAddressStreet}
                        placeholder="Street"
                        placeholderTextColor='#888'
                        style={[styles.input, { fontSize }]}
                    />
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                        value={addressCity}
                        onChangeText={setAddressCity}
                        placeholder="City"
                        placeholderTextColor='#888'
                        style={[styles.input, { fontSize }]}
                    />
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                        value={addressState}
                        onChangeText={setAddressState}
                        placeholder="State"
                        placeholderTextColor='#888'
                        style={[styles.input, { fontSize }]}
                    />
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                        value={addressZIP}
                        onChangeText={setAddressZIP}
                        placeholder="ZIP"
                        placeholderTextColor='#888'
                        style={[styles.input, { fontSize }]}
                    />
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                        value={addressCountry}
                        onChangeText={setAddressCountry}
                        placeholder="Country"
                        placeholderTextColor='#888'
                        style={[styles.input, { fontSize }]}
                    />
                </View>

                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={handleSave}
                >
                    <Text style={[styles.saveButtonText, { fontSize }]}>Save</Text>
                </TouchableOpacity>
                <View style={[styles.bottomButtons]}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={[styles.backLink, { fontSize }]}>Back</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

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
        backgroundColor: '#262626',
        padding: 20,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontFamily: 'Trebuchet MS',
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
        fontFamily: 'Trebuchet MS',
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

export default EditStaff;
