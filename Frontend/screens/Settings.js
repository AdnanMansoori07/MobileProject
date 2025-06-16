import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontSizeContext } from '../components/FontSizeContext';

const colours = { darkgray: '#262626' };
const FONT_SIZE_OPTIONS = [
  { label: 'Small', value: 14 },
  { label: 'Default', value: 16 },
  { label: 'Large', value: 20 }
];

const Settings = () => {
  const { fontSize, updateFontSize } = useContext(FontSizeContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerText, { fontSize }]}>Settings</Text>
        <Image
          source={require('../assets/user-profile-pic.png')}
          style={styles.profilePic}
        />
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { fontSize }]}>Font Size</Text>
        {FONT_SIZE_OPTIONS.map(option => (
          <TouchableOpacity
            key={option.value}
            style={styles.radioContainer}
            onPress={() => updateFontSize(option.value)}
          >
            <View style={[
              styles.radioCircle,
              fontSize === option.value && styles.selectedRadio
            ]}/>
            <Text style={[styles.radioLabel, { fontSize }]}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', padding: 20 },
  header: {
    backgroundColor: colours.darkgray,
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30
  },
  headerText: {
    color: '#FFF',
    fontFamily: 'Trebuchet MS',
    fontWeight: 'bold'
  },
  profilePic: { width: 40, height: 40, borderRadius: 20 },
  section: { marginTop: 20 },
  sectionTitle: {
    fontFamily: 'Trebuchet MS',
    fontWeight: 'bold',
    marginBottom: 10
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12
  },
  selectedRadio: {
    backgroundColor: '#262626'
  },
  radioLabel: {
    fontFamily: 'Trebuchet MS',
  }
});

export default Settings;
