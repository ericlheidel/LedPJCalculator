import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import PJScreen from "../screens/PJ/PJScreen"
import PJLensesScreen from "../screens/PJ/PJLensesScreen"
import PJCalculatorScreen from "../screens/PJ/PJCalculatorScreen"
import { StyleSheet, View, Text, Platform } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const Tab = createBottomTabNavigator()

export default function PJAppTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Projector Calculator"
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
        name="Projector Calculator"
        component={PJCalculatorScreen}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return <Ionicons name="calculator" size={30} color={color} />
          },
          tabBarLabel: ({ color, focused }) => {
            return (
              <View>
                <Text style={[styles.iconText, { color }]}>Calculator</Text>
              </View>
            )
          },
        }}
      />
      <Tab.Screen
        name="Projectors"
        component={PJScreen}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return <Ionicons name="videocam" size={30} color={color} />
          },
          tabBarLabel: ({ color, focused }) => {
            return (
              <View>
                <Text style={[styles.iconText, { color }]}>Projectors</Text>
              </View>
            )
          },
        }}
      />
      <Tab.Screen
        name="Projector Lenses"
        component={PJLensesScreen}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return <Ionicons name="cube" size={30} color={color} />
          },
          tabBarLabel: ({ color, focused }) => {
            return (
              <View>
                <Text style={[styles.iconText, { color }]}>Lenses</Text>
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
