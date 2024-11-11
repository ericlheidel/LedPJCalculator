import { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Dropdown } from "react-native-element-dropdown"
import { LEDConfigurationTourExample, ShowExamples } from "../../utility"

export default function LEDConfigurationDetailsShowScreen() {
  const [isFirstDropdownFocus, setIsFirstDropdownFocus] = useState(false)
  const [isSecondDropdownFocus, setIsSecondDropdownFocus] = useState(false)

  const [configArray, setConfigArray] = useState([])

  ShowExamples.sort((a, b) => {
    if (a.showName < b.showName) return -1
    if (a.showName > b.showName) return 1
  })

  useEffect(() => {
    configArray.sort((a, b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
    })
  }, [configArray])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>Shows</Text>
        <Dropdown
          style={[
            styles.dropdown,
            isFirstDropdownFocus && { borderColor: "blue", borderWidth: 2 },
          ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          search
          data={ShowExamples}
          labelField="showName"
          valueField="id"
          placeholder={~isFirstDropdownFocus ? "Select a Show" : "..."}
          onFocus={() => setIsFirstDropdownFocus(true)}
          onBlur={() => setIsFirstDropdownFocus(false)}
          onChange={(item) => {
            setConfigArray(LEDConfigurationTourExample)
            console.log(item)
          }}
        />
      </View>
      <View>
        <Text style={styles.titleText}>Configurations</Text>
        <Dropdown
          style={[
            styles.dropdown,
            isSecondDropdownFocus && { borderColor: "blue", borderWidth: 2 },
          ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          search
          data={configArray}
          labelField="name"
          valueField="id"
          placeholder={
            !isSecondDropdownFocus ? "Select a Configuration" : "..."
          }
          onChange={(item) => console.log(item)}
          onFocus={() => setIsSecondDropdownFocus(true)}
          onBlur={() => setIsSecondDropdownFocus(false)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "f5f5f5",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    paddingVertical: 16,
  },

  // TEMP
  dropdown: {
    height: 50,
    width: "80%",
    marginTop: 12,
    marginHorizontal: "auto",
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
})
