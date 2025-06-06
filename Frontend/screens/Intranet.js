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
import { useNavigation } from '@react-navigation/native';

const colours = {
  darkgray: '#262626',
  lightgray: '#D9D9D9',
};

const Intranet = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Intranet</Text>
        <Image
          source={require('../assets/user-profile-pic.png')}
          style={styles.profilePic}
        />
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#888" style={{ marginRight: 8 }} />
        <TextInput
          placeholder="Search.."
          placeholderTextColor="#888"
          style={styles.searchInput}
        />
      </View>

      <View style={styles.buttonGrid}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Files')}>
            <Ionicons name="folder-outline" size={28} color={colours.darkgray}/>
            <Text style={styles.buttonText}>Files</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Reports')}>
            <Ionicons name="clipboard-outline" size={28} color={colours.darkgray} />
            <Text style={styles.buttonText}>Reports</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Training')}>
            <Ionicons name="library-outline" size={28} color={colours.darkgray} />
            <Text style={styles.buttonText}>Training</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Requests')}>
            <Ionicons name="calendar-outline" size={28} color={colours.darkgray} />
            <Text style={styles.buttonText}>Requests</Text>
          </TouchableOpacity>
        </View>
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
    marginTop: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: colours.lightgray,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
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
