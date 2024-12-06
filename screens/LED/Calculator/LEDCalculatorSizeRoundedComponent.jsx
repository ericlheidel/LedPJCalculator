import { Platform, StyleSheet, Text, TextInput, View } from "react-native"

export default function LEDCalculatorSizeRoundedComponent({
  selectedTile,
  setWidthFeet,
  setHeightFeet,
  widthFeetRounded,
  setWidthFeetRounded,
  heightFeetRounded,
  setHeightFeetRounded,
  setIsEditingWidthFeet,
  setIsEditingHeightFeet,
}) {
  return (
    <View style={styles.roundedSizeContainer}>
      <View style={styles.sizeView}>
        <Text style={styles.sizeText}>{`Width (ft):`}</Text>
        <TextInput
          style={styles.textInput}
          value={widthFeetRounded === 0 ? "" : widthFeetRounded.toString()}
          keyboardType={Platform.select({
            ios: "decimal-pad",
            android: "numeric",
          })}
          textAlign="right"
          onFocus={(e) => {
            setIsEditingWidthFeet(true)
            if (Object.keys(selectedTile).length === 0) {
              alert("Please select a tile...")
              e.target.blur()
            }
          }}
          onBlur={() => setIsEditingWidthFeet(false)}
          onChangeText={(value) => {
            if (/^(\d+(\.\d*)?)?$/.test(value)) {
              setWidthFeet(value === "" ? "" : parseFloat(value))
              setWidthFeetRounded(value)
            }
          }}
        />
      </View>

      <View style={styles.sizeView}>
        <Text style={styles.sizeText}>{`Height (ft):`}</Text>
        <TextInput
          style={styles.textInput}
          value={heightFeetRounded === 0 ? "" : heightFeetRounded.toString()}
          keyboardType={Platform.select({
            ios: "decimal-pad",
            android: "numeric",
          })}
          textAlign="right"
          onFocus={(e) => {
            setIsEditingHeightFeet(true)
            if (Object.keys(selectedTile).length === 0) {
              alert("Please select a tile...")
              e.target.blur()
            }
          }}
          onBlur={() => setIsEditingHeightFeet(false)}
          onChangeText={(value) => {
            if (/^(\d+(\.\d*)?)?$/.test(value)) {
              setHeightFeet(value === "" ? "" : parseFloat(value))
              setHeightFeetRounded(value)
            }
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  roundedSizeContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "centeR",
    // padding: 6,
    marginTop: 12,
  },
  sizeView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  sizeText: {
    fontSize: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    width: "60%",
    height: 40,
    padding: 8,
    fontSize: 26,
    textAlign: "right",
    ...Platform.select({
      android: {
        fontSize: 20,
      },
    }),
  },
})
