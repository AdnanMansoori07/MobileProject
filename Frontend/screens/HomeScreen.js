import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import BottomNav from '../components/BottomNav';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Good morning, Sabrina</Text>
          <Image
            source={{ uri: 'https://i.pravatar.cc/100' }}
            style={styles.avatar}
          />
        </View>

        {/* 2x2 Button Grid */}
        <View style={styles.buttonGrid}>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('StaffDirectory')}
            >
              <Text style={styles.icon}>🏢</Text>
              <Text style={styles.buttonText}>Staff Directory</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Intranet')}
            >
              <Text style={styles.icon}>🌐</Text>
              <Text style={styles.buttonText}>Intranet</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Profile')}
            >
              <Text style={styles.icon}>👤</Text>
              <Text style={styles.buttonText}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.logoutButton]}>
              <Text style={styles.icon}>⏴</Text>
              <Text style={[styles.buttonText, styles.logoutText]}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <BottomNav />
    </SafeAreaView>
  );
};

const ROI_COLORS = {
  red: '#941a1d',
  charcoal: '#262626',
  lightGrey: '#D9D9D9',
  white: '#FFFFFF',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ROI_COLORS.white,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  content: {
    flex: 1,
  },
  header: {
    backgroundColor: ROI_COLORS.charcoal,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    color: ROI_COLORS.white,
    fontSize: 20,
    fontFamily: 'Trebuchet MS',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  buttonGrid: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: ROI_COLORS.lightGrey,
    margin: 10,
    width: 140,
    height: 140,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: ROI_COLORS.red,
  },
  logoutText: {
    color: ROI_COLORS.white,
  },
  buttonText: {
    marginTop: 5,
    fontFamily: 'Trebuchet MS',
    textAlign: 'center',
  },
  icon: {
    fontSize: 24,
  },
});

export default HomeScreen;
