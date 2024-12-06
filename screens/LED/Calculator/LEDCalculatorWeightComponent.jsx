import { Platform, StyleSheet, Text, TextInput, View } from "react-native"

export default function LEDCalculatorWeightComponent({ weight }) {
  return (
    <View style={styles.weightContainer}>
      <View style={styles.weightView}>
        <Text style={styles.weightText}>{`Weight (LBS)`}</Text>
        <TextInput
          style={styles.textInput}
          value={weight === 0 ? "" : weight.toString()}
          textAlign="right"
          editable={false}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  weightContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "centeR",
    marginTop: 6,
  },
  weightView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  weightText: {
    fontSize: 24,
    color: "#808080",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 4,
    color: "gray",
    width: "33%",
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
