import { Platform, StyleSheet, Text, TextInput, View } from "react-native"

export default function LEDCalculatorSizePanelsComponent({
  selectedTile,
  widthPanels,
  setWidthPanels,
  heightPanels,
  setHeightPanels,
  setIsEditingWidthFeet,
  setIsEditingHeightFeet,
}) {
  return (
    <View style={styles.panelsSizeContainer}>
      <View style={styles.sizeView}>
        <Text style={styles.sizeText}>{`Width (panels):`}</Text>
        <TextInput
          style={styles.textInput}
          value={widthPanels === 0 ? "" : widthPanels.toString()}
          keyboardType={Platform.select({
            ios: "decimal-pad",
            android: "numeric",
          })}
          textAlign="right"
          onFocus={(e) => {
            setIsEditingWidthFeet(false)
            if (Object.keys(selectedTile).length === 0) {
              alert("Please select a tile")
              e.target.blur()
            }
          }}
          onBlur={() => setIsEditingWidthFeet(true)}
          onChangeText={(value) =>
            setWidthPanels(value === "" ? "" : parseFloat(value) || 0)
          }
        />
      </View>

      <View style={styles.sizeView}>
        <Text style={styles.sizeText}>{`Height (panels):`}</Text>
        <TextInput
          style={styles.textInput}
          value={heightPanels === 0 ? "" : heightPanels.toString()}
          keyboardType={Platform.select({
            ios: "decimal-pad",
            android: "numeric",
          })}
          textAlign="right"
          onFocus={(e) => {
            setIsEditingHeightFeet(false)
            if (Object.keys(selectedTile).length === 0) {
              alert("Please select a tile...")
              e.target.blur()
            }
          }}
          onBlur={() => setIsEditingHeightFeet(true)}
          onChangeText={(value) =>
            setHeightPanels(value === "" ? "" : parseFloat(value) || 0)
          }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  panelsSizeContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "centeR",
    backgroundColor: "#f5f5f5",
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
