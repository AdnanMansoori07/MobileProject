import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import DepartmentDropdown from '../components/DepartmentDropdown';

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
    // destructure every field with fallback defaults
    const {
        id = '',
        name = '',
        phone = '',
        department = '',
        addressStreet = '',
        addressCity = '',
        addressState = '',
        addressZIP = '',
        addressCountry = ''
    } = route.params || {};

    // Always use fallback for state
    const [nameState, setName] = useState(name || '');
    const [phoneState, setPhone] = useState(phone || '');
    const [departmentState, setDepartment] = useState(department || '');
    const [addressStreetState, setAddressStreet] = useState(addressStreet || '');
    const [addressCityState, setAddressCity] = useState(addressCity || '');
    const [addressStateState, setAddressState] = useState(addressState || '');
    const [addressZIPState, setAddressZIP] = useState(addressZIP || '');
    const [addressCountryState, setAddressCountry] = useState(addressCountry || '');

    const getDepartmentId = (deptName) => {
        const found = departments.find(d => d.name === deptName);
        return found ? found.id : '';
    };

    const handleSave = () => {
        if (!id) {
            alert("No staff ID found.");
            return;
        }
        const params =
            `id=${encodeURIComponent(id)}&` +
            `name=${encodeURIComponent(nameState)}&` +
            `phone=${encodeURIComponent(phoneState)}&` +
            `department=${getDepartmentId(departmentState)}&` +
            `addressStreet=${encodeURIComponent(addressStreetState)}&` +
            `addressCity=${encodeURIComponent(addressCityState)}&` +
            `addressState=${encodeURIComponent(addressStateState)}&` +
            `addressZIP=${encodeURIComponent(addressZIPState)}&` +
            `addressCountry=${encodeURIComponent(addressCountryState)}`;

        fetch('http://10.0.0.132:44374/WebService1.asmx/UpdatePerson', {
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
                    <Text style={styles.headerText}>Edit Profile</Text>
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
                        value={nameState}
                        onChangeText={setName}
                        placeholder="Name"
                        placeholderTextColor='#888'
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                        value={phoneState}
                        onChangeText={setPhone}
                        placeholder="Phone"
                        placeholderTextColor='#888'
                        style={styles.input}
                    />
                </View>

                <DepartmentDropdown
                    selectedDepartment={departmentState}
                    onChange={setDepartment}
                    departments={departments}
                />

                <View style={styles.inputBox}>
                    <TextInput
                        value={addressStreetState}
                        onChangeText={setAddressStreet}
                        placeholder="Street"
                        placeholderTextColor='#888'
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                        value={addressCityState}
                        onChangeText={setAddressCity}
                        placeholder="City"
                        placeholderTextColor='#888'
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                        value={addressStateState}
                        onChangeText={setAddressState}
                        placeholder="State"
                        placeholderTextColor='#888'
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                        value={addressZIPState}
                        onChangeText={setAddressZIP}
                        placeholder="ZIP"
                        placeholderTextColor='#888'
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                        value={addressCountryState}
                        onChangeText={setAddressCountry}
                        placeholder="Country"
                        placeholderTextColor='#888'
                        style={styles.input}
                    />
                </View>

                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={handleSave}
                >
                    <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
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
        fontWeight: 'bold',
        fontFamily: 'Trebuchet MS',
        fontSize: 16,
    },
});

export default EditStaff;
