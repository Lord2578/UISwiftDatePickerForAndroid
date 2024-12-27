import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';

const ITEM_HEIGHT = 40;
const VISIBLE_ITEMS = 5;

const CustomDatePicker = () => {
  const years = Array.from({ length: 200 }, (_, i) => 1900 + i);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const renderPickerColumn = (items) => {
    return (
      <View style={styles.columnContainer}>
        <View style={styles.fadeTop} pointerEvents="none" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate="fast"
          style={styles.column}
          contentContainerStyle={[
            styles.columnContent,
            { paddingVertical: ITEM_HEIGHT * 2 }
          ]}
        >
          {items.map((item, index) => (
            <View
              key={item}
              style={[
                styles.item,
                index === Math.floor(items.length / 2) && styles.selectedItem
              ]}
            >
              <Text style={[
                styles.itemText,
                index === Math.floor(items.length / 2) ? styles.selectedItemText : styles.unselectedItemText
              ]}>
                {item}
              </Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.fadeBottom} pointerEvents="none" />
        <View style={styles.selectionIndicator} pointerEvents="none" />
      </View>
    );
  };

  return (
    <View style={styles.pickerContainer}>
      {renderPickerColumn(days)}
      {renderPickerColumn(months)}
      {renderPickerColumn(years)}
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    flexDirection: 'row',
    height: ITEM_HEIGHT * VISIBLE_ITEMS,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    overflow: 'hidden',
  },
  columnContainer: {
    flex: 1,
    height: ITEM_HEIGHT * VISIBLE_ITEMS,
    overflow: 'hidden',
  },
  column: {
    flex: 1,
  },
  columnContent: {
    paddingHorizontal: 4,
  },
  item: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedItem: {
    backgroundColor: 'transparent',
  },
  itemText: {
    fontSize: 16,
  },
  unselectedItemText: {
    color: '#999',
  },
  fadeTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: ITEM_HEIGHT * 2,
    backgroundColor: 'rgba(248, 248, 248, 0.68)',
    zIndex: 1,
  },
  fadeBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: ITEM_HEIGHT * 2,
    backgroundColor: 'rgba(248,248,248,0.68)',
    zIndex: 1,
  },
  selectionIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: ITEM_HEIGHT * 2,
    height: ITEM_HEIGHT,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: 'rgba(255, 255, 255, 0.14)',
  },
});

export default CustomDatePicker;

