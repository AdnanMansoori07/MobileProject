import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
const colours = {
  darkgray: '#262626',
  red: '#941A1D',
  lightgray: '#D9D9D9'
};

const StaffProfile = () => {
  const navigation = useNavigation();
  const route = useRoute();
const { name = 'N/A', phone = 'N/A', email = 'N/A', department = 'N/A' } = route.params || {};

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Staff Profile</Text>
        <Image source={require('../assets/user-red.png')} style={styles.profilePicSmall} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Large Profile Image */}
        <View style={styles.profileImageWrapper}>
          <Image source={require('../assets/user-red.png')} style={styles.profileImage} />
        </View>

        {/* Name */}
        <Text style={styles.name}>{name}</Text>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Email</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="call-outline" size={20} color="#000" style={styles.infoIcon} />
          <Text style={styles.infoText}>{phone}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="mail-outline" size={20} color="#000" style={styles.infoIcon} />
          <Text style={styles.infoText}>{email}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="business-outline" size={20} color="#000" style={styles.infoIcon} />
          <Text style={styles.infoText}>{department}</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backLink}>Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default StaffProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
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
    fontSize: 16,
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
    fontSize: 18,
    fontWeight: 'bold',
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
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  backLink: {
    color: colours.red,
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'flex-start',
  },
});
