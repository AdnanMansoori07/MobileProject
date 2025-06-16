import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontSizeContext } from '../components/FontSizeContext';

const colours = {
  darkgray: '#262626',
  red: '#941A1D',
  lightgray: '#D9D9D9'
};

function generateEmail(name) {
  if (!name) return 'N/A';
  let cleaned = name.replace(/[^a-zA-Z\s]/g, '');
  let parts = cleaned.trim().split(/\s+/);
  if (parts.length < 2) return 'N/A';
  let first = parts[0].toLowerCase();
  let last = parts[parts.length - 1].toLowerCase();
  return `${first}${last}@roi.com.au`;
}

const StaffProfile = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { fontSize } = useContext(FontSizeContext);

  const {
    id,
    name = 'N/A',
    phone = 'N/A',
    email = 'N/A',
    department = 'N/A',
    addressStreet = '',
    addressCity = '',
    addressState = '',
    addressZIP = '',
    addressCountry = ''
  } = route.params || {};

  const handleDelete = () => {
    if (!id) {
      alert("No staff ID found.");
      return;
    }
    fetch('http://localhost:44374/WebService1.asmx/RemovePerson', {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `id=${id}`
    })
      .then(res => res.text())
      .then(() => {
        navigation.goBack();
      })
      .catch(err => {
        alert('Failed to delete staff: ' + err);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerText, { fontSize }]}>Staff Profile</Text>
        <Image source={require('../assets/user-profile-pic.png')} style={styles.profilePicSmall} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileImageWrapper}>
          <Image source={require('../assets/user-red.png')} style={styles.profileImage} />
        </View>

        <Text style={[styles.name, { fontSize: fontSize + 2 }]}>{name}</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={[styles.actionButtonText, { fontSize }]}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={[styles.actionButtonText, { fontSize }]}>Email</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="call-outline" size={fontSize + 4} color="#000" style={styles.infoIcon} />
          <Text style={[styles.infoText, { fontSize }]}>{phone}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="mail-outline" size={fontSize + 4} color="#000" style={styles.infoIcon} />
          <Text style={[styles.infoText, { fontSize }]}>{generateEmail(name)}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="business-outline" size={fontSize + 4} color="#000" style={styles.infoIcon} />
          <Text style={[styles.infoText, { fontSize }]}>{department}</Text>
        </View>

        <View style={styles.bottomButtons}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={[styles.backLink, { fontSize }]}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Edit Profile', {
            id,
            name,
            phone,
            department,
            addressStreet,
            addressCity,
            addressState,
            addressZIP,
            addressCountry
          })}>
            <Text style={[styles.backLink, { fontSize }]}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDelete}>
            <Text style={[styles.backLink, { fontSize }]}>Delete</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StaffProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 10
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 40,
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
    fontWeight: 'bold',
  },
  profilePicSmall: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileImageWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 999,
    padding: 12,
    marginTop: 20,
    marginBottom: 12,
  },
  profileImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    borderRadius: 16
  },
  name: {
    fontWeight: 'bold',
    fontFamily: 'Trebuchet MS',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: colours.red,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 100,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Trebuchet MS',
    fontWeight: 'bold',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colours.lightgray,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 12,
    alignSelf: 'stretch',
  },
  infoIcon: {
    marginRight: 12,
  },
  infoText: {
    color: '#000',
    fontFamily: 'Trebuchet MS',
    fontWeight: '500',
  },
  backLink: {
    color: colours.red,
    fontFamily: 'Trebuchet MS',
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'flex-start',
  },
});
