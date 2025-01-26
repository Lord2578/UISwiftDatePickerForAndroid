import React from 'react';
import { View, StyleSheet } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';

const CustomColorPicker = ({ onColorChange }) => {
  return (
    <View style={styles.container}>
      <ColorPicker
        onColorChange={onColorChange}
        thumbSize={30}
        sliderSize={30}
        noSnap={true}
        row={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
  },
});

export default CustomColorPicker;

