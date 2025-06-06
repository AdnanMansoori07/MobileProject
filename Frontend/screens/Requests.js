import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';

const colours = {
    darkgray: "#262626",
    red: "#941A1D"
};

const leaveTypes = [
    { label: 'Annual Leave', value: 'Annual Leave' },
    { label: 'Sick Leave', value: 'Sick Leave' },
    { label: 'Carer’s Leave', value: 'Carer’s Leave' },
    { label: 'Compassionate Leave', value: 'Compassionate Leave' },
    { label: 'Unpaid Leave', value: 'Unpaid Leave' },
];

const Requests = () => {
    const navigation = useNavigation();

    const [open, setOpen] = React.useState(false);
    const [leaveType, setLeaveType] = React.useState(leaveTypes[0].value);
    const [items, setItems] = React.useState(leaveTypes);

    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');
    const [reason, setReason] = React.useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Request</Text>
                <Image
                    source={require('../assets/user-profile-pic.png')}
                    style={styles.profilePic}
                />
            </View>

            <View style={styles.profileImageWrapper}>
                <Ionicons name="calendar-outline" size={64} color="#262626" />
            </View>

            <View style={{ marginBottom: 10, zIndex: 10 }}>
                <DropDownPicker
                    open={open}
                    value={leaveType}
                    items={items}
                    setOpen={setOpen}
                    setValue={setLeaveType}
                    setItems={setItems}
                    style={styles.dropdown}
                    textStyle={styles.dropdownText}
                    dropDownContainerStyle={{ borderRadius: 8 }}
                    placeholder="Select Leave Type"
                />
            </View>

            <View style={styles.inputBox}>
                <TextInput
                    value={startDate}
                    onChangeText={setStartDate}
                    placeholder='Start Date (YYYY-MM-DD)'
                    placeholderTextColor='#888'
                    style={styles.input}
                />
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    value={endDate}
                    onChangeText={setEndDate}
                    placeholder='End Date (YYYY-MM-DD)'
                    placeholderTextColor='#888'
                    style={styles.input}
                />
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    value={reason}
                    onChangeText={setReason}
                    placeholder='Reason'
                    placeholderTextColor='#888'
                    style={[styles.input, { height: 80, textAlignVertical: 'top' }]}
                    multiline
                />
            </View>
            <TouchableOpacity
                style={styles.submitButton}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.submitButtonText}>Submit Request</Text>
            </TouchableOpacity>
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
    profileImageWrapper: {
        backgroundColor: '#fff',
        borderRadius: 100,
        padding: 8,
        alignSelf: 'center',
        marginBottom: 16,
        marginTop: 16
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
    dropdown: {
        backgroundColor: '#D9D9D9',
        borderRadius: 8,
        borderWidth: 0,
        minHeight: 44,
    },
    dropdownText: {
        fontFamily: 'Trebuchet MS',
        fontSize: 16,
        color: '#000',
    },
    submitButton: {
        marginTop: 20,
        backgroundColor: colours.red,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontFamily: 'Trebuchet MS',
        fontSize: 16,
    },
});

export default Requests;
