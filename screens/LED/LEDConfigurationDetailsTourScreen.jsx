import {
  // ActionSheetIOS,
  StyleSheet,
  Text,
  View,
} from "react-native"
import { LEDConfigurationTourExample, TourExamples } from "../../utility"
import { useEffect, useState } from "react"
import { Dropdown } from "react-native-element-dropdown"
import RNPickerSelect from "react-native-picker-select/"

export default function LEDConfigurationDetailsTourScreen() {
  const [isFirstDropdownFocus, setIsFirstDropdownFocus] = useState(false)
  const [isSecondDropdownFocus, setIsSecondDropdownFocus] = useState(false)

  const [configArray, setConfigArray] = useState([])

  const [selectedValue, setSelectedValue] = useState(0)
  const [selectedLabel, setSelectedLabel] = useState("")

  TourExamples.sort((a, b) => {
    if (a.tourName < b.tourName) return -1
    if (a.tourName > b.tourName) return 1
  })

  useEffect(() => {
    configArray.sort((a, b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
    })
  }, [configArray])

  const transformedTours = TourExamples.map((tour) => ({
    label: tour.tourName,
    value: tour.id,
  }))

  // const showActionSheet = () => {
  //   const options = transformedTours.map((item) => item.label)
  //   options.push("Cancel")

  //   ActionSheetIOS.showActionSheetWithOptions(
  //     {
  //       options,
  //       cancelButtonIndex: options.length - 1,
  //     },
  //     (buttonIndex) => {
  //       if (buttonIndex !== options.length - 1) {
  //         setSelectedValue(transformedTours[buttonIndex].value)
  //         setSelectedLabel(transformedTours[buttonIndex].label)
  //       }
  //     }
  //   )
  // }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>Tours</Text>
        <Dropdown
          style={[
            styles.dropdown,
            isFirstDropdownFocus && { borderColor: "blue", borderWidth: 2 },
          ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          search
          data={TourExamples}
          labelField="tourName"
          valueField="id"
          placeholder={!isFirstDropdownFocus ? "Select a Tour" : "..."}
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
      <View>
        <Text style={styles.titleText}>Tours</Text>
        <RNPickerSelect
          items={transformedTours}
          value={selectedValue}
          placeholder={{
            label: "Select a Tour...",
            value: null,
          }}
          onValueChange={(value) => setSelectedValue(value)}
          style={pickerSelectStyles}
        />
        <Text style={styles.selectedValue}>
          Selected Value: {selectedValue ? selectedValue : "None"}
        </Text>
      </View>
      {/* <View>
        <Text>
          {Platform.OS === "ios" ? "this is iOS..." : "this is AndroidOS"}
        </Text>
        <Button title="Choose a Tour..." onPress={showActionSheet} />
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    paddingVertical: 16,
  },

  // <Dropdown />
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

  // <RNPickerSelect />
  selectedValue: {
    fontSize: 18,
    marginTop: 20,
    color: "#333",
    textAlign: "center",
  },
})

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    color: "#333",
    fontSize: 16,
    width: "80%",
    marginBottom: 20,
    marginHorizontal: "auto",
  },
  inputAndroid: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    color: "#333",
    fontSize: 16,
    width: "80%",
    marginBottom: 20,
    marginHorizontal: "auto",
  },
})
