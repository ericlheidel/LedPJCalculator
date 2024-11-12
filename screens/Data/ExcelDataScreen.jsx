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
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const tempAccessToken =
    "EwB4A8l6BAAUbDba3x2OMJElkF7gJ4z/VbCPEz0AAZmXetDVE0fwYFWr5xRDZb0IziudPSNI2LNDwQmgPakSnRSGM1Dfdyaw8gINz7E3mIwTSQOzXF2lOpAcMK62OvO+GolEp6cnU5T/2HxbtSJl+kRNV9EtjiMtZ87IKQKJH1LcC9U5Aw1gmyPR6mo52bcH+yHw8h/9lrBsW2RSc5kvsVWMrYiVkeGpnlofZN/r9RL4kaUYMxlnvlym7ix6LgTkGm7r0EUcj08WKSw//BRSXA8TKA0OdafkQn82lcv6rEeDfEfCeiHtle4LekmjY329KaPQhrKxQ0XQl54hUMa2+BDHcfYxYOe1uk7GfQusnrtTeH8IWzxpn4yqI887Z3YQZgAAEC927e2iSugGPoj8F4qgBfNAAjP9HmYxxCs3NmzpyYnKue4fH1uKFWg+8eTgX6zsFMEabMmAPVANWmb6s99DhBjuC1GQ5CWe9l9mphhiC+DNk/Rbd1/MdicmSXj2EQCRX7k9S7yctw57Y1pe81NqHmESwGVM9KZ9pvQ9vJVN/fph+F/tVTs/xRhqMK50j9tO72qI6BGyOhA4OMNnnLC9MOv1G5ZFTpuew9EDcbMKMhK0qmjh1daybzF+UT/I0M6zdut8+4oirXbbBIAiEBRIJd7zgy9uFzhm9pexUt5fpFgcLXIO94hZ2x+rPkeYNksBdga1AyCBuGJlDCWi1faebbbWGRQ+J2TxPjvhA/VMlzpI7NbqC3olUcmFcVE6+lIPC/MlEmvf3oA2uSm7XSDpIeuVGPvVYM6I+svr6A28C27Q7YsNYS45gqIDO3gtOWuamrsEFGbexSkFbeYo76vztpBkWfsBQMK/7LtyTr4p74DtYUYmptso7IqSHDZVsqdtV0vz5619TlPQUrK5p2hePI7Rh4fd+u9ZHZeGSA7hvvAYMb/WzskZ2wYDC3oGrgDT/fbRKgjAj0evkhPz98+5zVNO/CfliKvuZSwFtllx7rMF6RXsoAhGU4UTphCHrq+vwneoYPzIoDqZSui0QOrD1Of/OQGP4cBgpCalYP2vUw1P/k+dHJ3r5PPMwFnlzNYEqXcDfsAo2M46hg0eup/TdLO2ntMw7RsQNMpdLsYgG8XPIQYWk18WO+VIVG4jWxSIYWVua7iJzQNkEYfpm025Ft4aWIQC"

  const getData = async () => {
    try {
      setIsLoading(true)
      const res = await fetch(
        `https://graph.microsoft.com/v1.0/me/drive/root:/WEDDING GIFTS.xlsx:/workbook/worksheets/{00000000-0001-0000-0000-000000000000}/range(address='C3:C34')`,
        {
          headers: {
            Authorization: `Bearer ${tempAccessToken}`,
          },
        }
      )
      const data = await res.json()

      const giftItems = data.values.flat().filter((item) => item !== "")

      console.log(giftItems)

      // setData(data)
      setData(giftItems)

      setIsLoading(false)
      // console.log(data)
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
        {data && data[0] ? (
          <>
            <View>
              {data.map((item, index) => {
                return <Text key={index}>{item}</Text>
              })}
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
