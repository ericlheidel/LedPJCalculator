import React, { useEffect, useState } from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import "./gesture-handler"
import { StyleSheet, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import Welcome from "./components/Welcome"
import LEDConfigurationsScreen from "./screens/LED/LEDConfigurationsScreen"
import DataScreen from "./screens/Data/DataScreen"
import LEDAppTabs from "./tabs/LEDAppTabs"
import PJAppTabs from "./tabs/PJAppTabs"
import LEDAppTabsTwo from "./tabs/LEDAppTabsTwo"
import { useFonts } from "expo-font"

const Drawer = createDrawerNavigator()

export default function App() {
  const [loaded] = useFonts({
    SpaceMono: require("./assets/fonts/SpaceMono-Regular.ttf"),
  })

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  // if (isLoading) {
  //   return (
  //     <View style={styles.container}>
  //       <Welcome />
  //     </View>
  //   )
  // } else {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={Welcome}
          options={{ headerTitle: "Welcome to Moo TV" }}
        />
        <Drawer.Screen
          name="LED"
          component={LEDAppTabs}
          options={{ headerTitle: "Moo TV" }}
        />
        <Drawer.Screen
          name="LED 2"
          component={LEDAppTabsTwo}
          options={{ headerTitle: "Moo TV" }}
        />
        <Drawer.Screen
          name="Projector"
          component={PJAppTabs}
          options={{ headerTitle: "Moo TV" }}
        />
        <Drawer.Screen
          name="LED Wall Configurations"
          component={LEDConfigurationsScreen}
          options={{ headerTitle: "Moo TV" }}
        />
        <Drawer.Screen
          name="GET Shoe API FETCH EXAMPLE"
          component={DataScreen}
          options={{ headerTitle: "Get Data Example" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
})
