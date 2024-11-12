import { useState } from "react"
import {
  ActivityIndicator,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"

export default function ExcelDataScreen() {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const getData = async () => {
    try {
      setIsLoading(true)
      const res = await fetch(
        `https://graph.microsoft.com/v1.0/me/drive/root:/WEDDING GIFTS.xlsx:/workbook/worksheets/{00000000-0001-0000-0000-000000000000}/range(address='C3:C34')`
      )
      const data = await res.json()
      setData(data)
      setIsLoading(false)
      console.log(data)
    } catch (error) {
      alert("Error fetching data:", error)
      setIsLoading(false)
    }
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        alignItems: "center",
      }}
    >
      <Text style={styles.titleText}>Excel Data Screen</Text>
      {!isLoading && (
        <Button
          title="Get Excel Data"
          onPress={async () => {
            await getData()
          }}
        />
      )}

      {isLoading && <ActivityIndicator size="large" color="blue" />}

      <Text>
        {data && data?.id ? (
          <>
            <View>
              <Text></Text>
            </View>
          </>
        ) : (
          "Press Button to Display Data"
        )}
      </Text>
      <Button title="Reset Excel Data" onPress={() => setData({})} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    // justifyContent: "center",
    // alignItems: "center",
  },
  titleText: {
    marginTop: 16,
    fontSize: 36,
  },
  shoeDetailText: {
    fontSize: 24,
  },
})
