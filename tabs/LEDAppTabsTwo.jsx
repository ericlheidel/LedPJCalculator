import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import LEDTilesScreen from "../screens/LED/LEDTilesScreen"
import LEDProcessorsScreen from "../screens/LED/LEDProcessorsScreen"
import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, View, Text, Platform } from "react-native"
import LEDCalculatorScreenTwo from "../screens/LED/LEDCalculatorScreenTwo"

const Tab = createBottomTabNavigator()

export default function LEDAppTabsTwo({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="LED Calculator 2"
      style={styles.container}
      screenOptions={{
        tabBarStyle: {
          height: 70,
          paddingBottom: Platform.OS === "ios" ? 20 : 0,
          height: Platform.OS === "ios" ? 90 : 70,
        },
      }}
    >
      <Tab.Screen
        name="LED Calculator 2"
        component={LEDCalculatorScreenTwo}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return <Ionicons name="calculator" size={30} color={color} />
          },
          tabBarLabel: ({ color }) => {
            return (
              <View>
                <Text style={[styles.iconText, { color }]}>Calculator</Text>
              </View>
            )
          },
        }}
      />
      <Tab.Screen
        name="LED Tiles"
        component={LEDTilesScreen}
        style={styles.iconText}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return <Ionicons name="apps" size={30} color={color} />
          },
          tabBarLabel: ({ color }) => {
            return (
              <View>
                <Text style={[styles.iconText, { color }]}>Tiles</Text>
              </View>
            )
          },
        }}
      />
      <Tab.Screen
        name="LED Processors"
        component={LEDProcessorsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return <Ionicons name="desktop-outline" size={30} color={color} />
          },
          tabBarLabel: ({ color }) => {
            return (
              <View>
                <Text style={[styles.iconText, { color }]}>Processors</Text>
              </View>
            )
          },
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {},
  iconText: {
    paddingTop: 8,
  },
})