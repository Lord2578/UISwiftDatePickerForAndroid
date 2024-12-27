import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomDatePicker from './components/CustomDatePicker';

export default function App() {
  return (
    <View style={styles.container}>
      <CustomDatePicker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
});

