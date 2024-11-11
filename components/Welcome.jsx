import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native"

export default function Welcome() {
  return (
    <View>
      <Image source={require("../assets/mootv-logo.png")} style={styles.logo} />
      {/* <ActivityIndicator size="large" /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  logo: {
    width: 400,
    height: 200,
  },
})
