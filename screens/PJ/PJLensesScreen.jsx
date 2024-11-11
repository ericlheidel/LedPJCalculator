import { StyleSheet, Text, View } from "react-native"

export default function PJLensesScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the Lenses Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
})
