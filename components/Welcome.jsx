import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native"

export default function Welcome() {
  return (
    <View style={styles.logoView}>
      <Image source={require("../assets/mootv-logo.png")} style={styles.logo} />
      {/* <ActivityIndicator size="large" /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  logoView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 400,
    height: 200,
  },
})
