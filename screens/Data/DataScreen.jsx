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

export default function DataScreen() {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const getData = async () => {
    try {
      setIsLoading(true)
      const res = await fetch(`https://omgshoes.eheidel.com/api/test/shoe`)
      const data = await res.json()
      setData(data)
      setIsLoading(false)
    } catch (error) {
      alert("Error fetching data:", error)
    } finally {
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
      <Text style={styles.titleText}>Data Screen</Text>
      {!isLoading && (
        <Button
          title="Get Data"
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
              <Text style={styles.shoeDetailText}>shoeId: {data?.id}</Text>
              <Text style={styles.shoeDetailText}>name: {data?.name}</Text>
              <Text style={styles.shoeDetailText}>style: {data?.style}</Text>
              <Text style={styles.shoeDetailText}>year: {data?.year}</Text>
              <Text style={styles.shoeDetailText}>
                modelNumber: {data?.modelNumber}
              </Text>
              <Text style={styles.shoeDetailText}>
                colorway: {data?.colorway}
              </Text>
              <Image
                source={{ uri: `https://omgshoes.eheidel.com${data?.image}` }}
                style={{
                  width: 300,
                  height: 300,
                  marginHorizontal: "auto",
                }}
                resizeMode="contain"
              />
            </View>
          </>
        ) : (
          "Press Button to Display Data"
        )}
      </Text>
      <Button title="Reset Data" onPress={() => setData({})} />
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
