import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import BottomNav from '../components/BottomNav';

const ViewStaffScreen = ({ route, navigation }) => {
  const { staff } = route.params;

  const handleCall = () => {
    Linking.openURL(`tel:${staff.phone}`);
  };

  const handleEmail = () => {
    Linking.openURL(`mailto:${staff.email}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Staff Profile</Text>
        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }}
          style={styles.profileImage}
        />
      </View>

      <View style={styles.profileSection}>
        <View style={styles.avatarWrapper}>
          <Image
            source={require('../assets/user-red.png')}
            style={styles.avatar}
          />
        </View>
        <Text style={styles.name}>{staff.name}</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.actionButton} onPress={handleCall}>
            <Text style={styles.actionButtonText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={handleEmail}>
            <Text style={styles.actionButtonText}>Email</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.infoIcon}>📞</Text>
          <Text style={styles.infoText}>{staff.phone}</Text>
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.infoIcon}>✉️</Text>
          <Text style={styles.infoText}>{staff.email}</Text>
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.infoIcon}>🏢</Text>
          <Text style={styles.infoText}>{staff.department}</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backLink}>Back</Text>
        </TouchableOpacity>
      </View>

      <BottomNav />
    </SafeAreaView>
  );
};

const ROI = {
  red: '#941a1d',
  lightGrey: '#D9D9D9',
  darkGrey: '#262626',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ROI.lightGrey,
  },
  header: {
    backgroundColor: ROI.darkGrey,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Trebuchet MS',
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  profileSection: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flex: 1,
  },
  avatarWrapper: {
    backgroundColor: ROI.lightGrey,
    borderRadius: 100,
    padding: 10,
    marginBottom: 10,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Trebuchet MS',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: ROI.red,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  actionButtonText: {
    color: 'white',
    fontFamily: 'Trebuchet MS',
    fontSize: 16,
  },
  infoBlock: {
    backgroundColor: ROI.lightGrey,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  infoIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  infoText: {
    fontSize: 16,
    fontFamily: 'Trebuchet MS',
  },
  backLink: {
    color: ROI.red,
    fontSize: 14,
    fontFamily: 'Trebuchet MS',
    marginTop: 15,
  },
});

export default ViewStaffScreen;
