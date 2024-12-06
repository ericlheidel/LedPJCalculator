import { Platform, StyleSheet, Text, TextInput, View } from "react-native"

export default function LEDCalculatorSizeActualComponent({
  widthFeetActual,
  heightFeetActual,
}) {
  return (
    <View style={styles.actualSizeContainer}>
      <View style={styles.sizeView}>
        <Text style={styles.sizeText}>Actual Width:</Text>
        <TextInput
          style={styles.textInput}
          value={
            widthFeetActual === 0 ? "" : widthFeetActual.toFixed(2).toString()
          }
          textAlign="right"
          editable={false}
        />
      </View>

      <View style={styles.sizeView}>
        <Text style={styles.sizeText}>Actual Height:</Text>
        <TextInput
          style={styles.textInput}
          value={
            heightFeetActual === 0 ? "" : heightFeetActual.toFixed(2).toString()
          }
          textAlign="right"
          editable={false}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  actualSizeContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
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
    color: "gray",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "gray",
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
