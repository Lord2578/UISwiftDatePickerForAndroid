import React, { useState } from "react"
import { View, StyleSheet, TouchableOpacity, Text, Switch } from "react-native"
import CustomDatePicker from "./components/CustomDatePicker"
import CustomColorPicker from "./components/ColorPicker"

export default function App() {
  const [textColor, setTextColor] = useState("#000000")
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF")
  const [activeColorPicker, setActiveColorPicker] = useState(null)
  const [showDay, setShowDay] = useState(true)
  const [showMonth, setShowMonth] = useState(true)
  const [showYear, setShowYear] = useState(true)

  const handleColorChange = (color) => {
    if (activeColorPicker === "text") {
      setTextColor(color)
    } else if (activeColorPicker === "background") {
      setBackgroundColor(color)
    }
  }

  const toggleColorPicker = (type) => {
    setActiveColorPicker(activeColorPicker === type ? null : type)
  }

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <CustomDatePicker textColor={textColor} showDay={showDay} showMonth={showMonth} showYear={showYear} />

      <View style={styles.toggleContainer}>
        <View style={styles.toggleItem}>
          <Text>Day</Text>
          <Switch value={showDay} onValueChange={setShowDay} />
        </View>
        <View style={styles.toggleItem}>
          <Text>Month</Text>
          <Switch value={showMonth} onValueChange={setShowMonth} />
        </View>
        <View style={styles.toggleItem}>
          <Text>Year</Text>
          <Switch value={showYear} onValueChange={setShowYear} />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, activeColorPicker === "text" && styles.activeButton]}
          onPress={() => toggleColorPicker("text")}
        >
          <Text style={styles.buttonText}>
            {activeColorPicker === "text" ? "Hide Text Color Picker" : "Change Text Color"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, activeColorPicker === "background" && styles.activeButton]}
          onPress={() => toggleColorPicker("background")}
        >
          <Text style={styles.buttonText}>
            {activeColorPicker === "background" ? "Hide Background Color Picker" : "Change Background Color"}
          </Text>
        </TouchableOpacity>
      </View>

      {activeColorPicker && <CustomColorPicker onColorChange={handleColorChange} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
  toggleItem: {
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
  },
  activeButton: {
    backgroundColor: "#FF3B30",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
})

