import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const colours = {
  darkgray: '#262626',
  lightgray: '#D9D9D9',
};

const screenWidth = Dimensions.get('window').width;

const Intranet = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Intranet</Text>
        <Image
          source={require('../assets/user-red.png')}
          style={styles.profilePic}
        />
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#888" style={{ marginRight: 8 }} />
        <TextInput
          placeholder="Search.."
          placeholderTextColor="#888"
          style={styles.searchInput}
        />
      </View>

      {/* Button Grid */}
      <View style={styles.buttonGrid}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="folder-outline" size={28} color={colours.darkgray} />
          <Text style={styles.buttonText}>Files</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Ionicons name="clipboard-outline" size={28} color={colours.darkgray} />
          <Text style={styles.buttonText}>Reports</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Ionicons name="library-outline" size={28} color={colours.darkgray} />
          <Text style={styles.buttonText}>Training</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Ionicons name="calendar-outline" size={28} color={colours.darkgray} />
          <Text style={styles.buttonText}>Requests</Text>
        </TouchableOpacity>
      </View>
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
    fontWeight: 'bold',
    fontFamily: 'Trebuchet MS',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: colours.lightgray,
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
    color: '#000',
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 12,
    columnGap: 12,
    marginTop: 20,
  },
  button: {
    width: (screenWidth - 60) / 2,
    aspectRatio: 1,
    backgroundColor: colours.lightgray,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: colours.darkgray,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Trebuchet MS',
    marginTop: 8,
  },
});

export default Intranet;
