import React, { useRef } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"

const ITEM_HEIGHT = 40
const VISIBLE_ITEMS = 5

const CustomDatePicker = ({ textColor, showDay = true, showMonth = true, showYear = true }) => {
  const scrollViewRef = useRef(null) // Moved useRef hook to the top level
  const years = Array.from({ length: 200 }, (_, i) => 1900 + i)
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const days = Array.from({ length: 31 }, (_, i) => i + 1)

  const renderPickerColumn = (items) => {
    return (
      <View style={styles.columnContainer}>
        <ScrollView
          ref={scrollViewRef}
          showsVerticalScrollIndicator={false}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate="fast"
          style={styles.column}
          contentContainerStyle={styles.columnContent}
        >
          {items.map((item) => (
            <View key={item} style={styles.item}>
              <Text style={[styles.itemText, { color: textColor }]}>{item}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.selectionOverlay} pointerEvents="none" />
      </View>
    )
  }

  return (
    <View style={styles.pickerContainer}>
      {showDay && renderPickerColumn(days)}
      {showMonth && renderPickerColumn(months)}
      {showYear && renderPickerColumn(years)}
    </View>
  )
}

const styles = StyleSheet.create({
  pickerContainer: {
    flexDirection: "row",
    height: ITEM_HEIGHT * VISIBLE_ITEMS,
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    overflow: "hidden",
  },
  columnContainer: {
    flex: 1,
    height: ITEM_HEIGHT * VISIBLE_ITEMS,
    overflow: "hidden",
  },
  column: {
    flex: 1,
  },
  columnContent: {
    paddingVertical: ITEM_HEIGHT * 2,
  },
  item: {
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 16,
  },
  selectionOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    top: ITEM_HEIGHT * 2,
    height: ITEM_HEIGHT,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#e0e0e0",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
  },
})

export default CustomDatePicker

