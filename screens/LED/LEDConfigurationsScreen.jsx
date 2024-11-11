import { Picker, PickerIOS } from "@react-native-picker/picker"
import { useState } from "react"
import {
  Button,
  Platform,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native"
import LEDConfigurationDetailsTourScreen from "./LEDConfigurationDetailsTourScreen"
import LEDConfigurationDetailsShowScreen from "./LEDConfigurationDetailsShowScreen"
import { ScrollView } from "react-native-gesture-handler"

export default function LEDConfigurationsScreen() {
  const [isShowVisible, setIsShowVisible] = useState(false)
  const [isTourVisible, setIsTourVisible] = useState(false)

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleText}>LED Configurations</Text>
      <View style={styles.pressableView}>
        {/* <Pressable>
          <Text style={styles.pressableText}>Tours</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.pressableText}>Shows</Text>
        </Pressable> */}
        <Button
          style={styles.button}
          title="Tour"
          onPress={() => {
            setIsShowVisible(false)
            setIsTourVisible(true)
          }}
        />
        <Button
          style={styles.button}
          title="Show"
          onPress={() => {
            setIsTourVisible(false)
            setIsShowVisible(true)
          }}
        />
      </View>
      <View>
        {isTourVisible && <LEDConfigurationDetailsTourScreen />}
        {isShowVisible && <LEDConfigurationDetailsShowScreen />}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  titleText: {
    paddingTop: 12,
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
  },
  button: {
    width: 45,
    height: 45,
  },
})
