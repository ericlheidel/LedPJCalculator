import { StyleSheet, Text, View } from "react-native"

export default function PJScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the Projectors Screen</Text>
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
