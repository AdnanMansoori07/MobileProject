import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import BottomNav from '../components/BottomNav';

const dummyData = [
  { id: '1', name: 'Taylor Swift' },
  { id: '2', name: 'Dua Lipa' },
  { id: '3', name: 'Will Ramos' },
  { id: '4', name: 'Alan Walker' },
];

const StaffDirectoryScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');

  const filteredData = dummyData.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Image source={require('../assets/user-red.png')} style={styles.avatar} />
        <Text style={styles.name}>{item.name}</Text>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() =>
            navigation.navigate('ViewStaff', {
              staff: {
                name: item.name,
                phone: '02 2000 0022',
                email: `${item.name.toLowerCase().replace(/\s/g, '')}@roi.com.au`,
                department: 'Information Technology',
              },
            })
          }
        >
          <Text style={styles.menuIcon}>⋯</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Staff Directory</Text>
          <Image
            source={{ uri: 'https://i.pravatar.cc/100' }}
            style={styles.profileImage}
          />
        </View>

        {/* Search */}
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search..."
            placeholderTextColor="#888"
            value={search}
            onChangeText={setSearch}
            style={styles.searchInput}
          />
        </View>

        {/* Add Staff button (not part of FlatList) */}
        <TouchableOpacity
          style={styles.addStaffButton}
          onPress={() => navigation.navigate('AddStaff')}
        >
          <Text style={styles.addStaffText}>＋ Add Staff</Text>
        </TouchableOpacity>

        {/* Staff List */}
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
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
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
  },
  header: {
    backgroundColor: ROI.darkGrey,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Trebuchet MS',
    fontWeight: 'bold',
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  searchBox: {
    marginTop: 15,
    backgroundColor: ROI.lightGrey,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Trebuchet MS',
  },
  addStaffButton: {
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: ROI.red,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  addStaffText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Trebuchet MS',
  },
  card: {
    backgroundColor: ROI.lightGrey,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    marginRight: 12,
    borderRadius: 16,
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Trebuchet MS',
  },
  menuButton: {
    paddingHorizontal: 8,
  },
  menuIcon: {
    fontSize: 22,
    fontWeight: '600',
  },
});

export default StaffDirectoryScreen;
