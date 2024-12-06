import { ScrollView, Text, TextBase, View } from "react-native"
import LEDCalculatorDropdownComponent from "./Calculator/LEDCalculatorDropdownComponent"

export default function LEDCalculatorScreenTwo() {
  return (
    <ScrollView>
      <View>
        <Text style={{ textAlign: "center", padding: 20 }}>
          Let's try and make the original calculator here, but with separate
          components
        </Text>
      </View>
      <View>
        <LEDCalculatorDropdownComponent />
      </View>
    </ScrollView>
  )
}
