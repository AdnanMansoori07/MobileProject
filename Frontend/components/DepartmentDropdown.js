import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, FlatList, Modal, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const DepartmentDropdown = ({ value, onChange, departments }) => {
  const [visible, setVisible] = useState(false);
  const selectedDept = departments.find(d => d.id === value);

  return (
    <View>
      <TouchableOpacity
        style={styles.dropdownBox}
        onPress={() => setVisible(true)}
        activeOpacity={0.7}
      >
        <Text style={styles.dropdownText}>
          {selectedDept ? selectedDept.name : 'Select Department'}
        </Text>
        <Ionicons name="chevron-down-outline" size={20} color="#888" style={{ marginLeft: 8 }} />
      </TouchableOpacity>
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPressOut={() => setVisible(false)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalContent}>
              <FlatList
                data={departments}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => {
                      onChange(item.id);
                      setVisible(false);
                    }}
                  >
                    <Text style={styles.optionText}>{item.name}</Text>
                  </TouchableOpacity>
                )}
                // Set max height so it doesn't overflow on small screens
                style={{ maxHeight: screenHeight * 0.4 }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownBox: {
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between'
  },
  dropdownText: {
    fontSize: 16,
    fontFamily: 'Trebuchet MS',
    color: '#000'
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.20)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  centeredView: {
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 8,
    width: screenWidth * 0.85,
    minWidth: 250,
    maxWidth: 400,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 2 }
  },
  option: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  optionText: {
    fontSize: 18,
    fontFamily: 'Trebuchet MS',
    color: '#262626'
  }
});

export default DepartmentDropdown;
