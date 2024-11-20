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
    "EwB4A8l6BAAUbDba3x2OMJElkF7gJ4z/VbCPEz0AAVUdhI1mYsvDRLV2/ySMTpnJ8gumbolimw/CxGYgdT1SYFV7Y/DxVIy+LdTgTX1G6gb6Fd45vOkxVZCfHbsi3Fe/zDlH+H87Ygg3D7P2uMHcrO80x1x5RdAJnL1m8ip2jFCheQme+pbvEx12cMYFlBy1kEUyJRV7YbtMlU94ycICGISvmwf45XjkEP9mspyixfqGuBiivMFoG3fXwUzQWULKRd0hONEswIyfcIB/zZ4DaYhppb25FUkq1RE1AJUr9fjpeF7G3Bj6lquVptjbxnHbebzWxdgmDpkWROdmpgm9/eo5e6NEUnSpn1ofYgnKDUIRCCBCKU6/xc0Zj5HdsXoQZgAAECv8grzZkztfFqzt7rXcznxAApWfu3UhmBS0IQ7RITzlr308Ct07DnXmoWrpHeCKqw6V0kh63NS0QLHu7/wrfD+ysNh9yEo8ut9uumXAPg5ulBZD86Q44xxT5Hv0tdqY+pakPif23+GwgFISGSkXSgz18KZS7hJqWVow/7T2HJUs3EFCru04wSyXs5L87WRhl7W1jDRti2CpejaT5cH5fgDrovzqyAzL56L7Dt6lA5W6V3I01O+2fgipHmOSf9kOFEU+dAoLsM25+1LBt28A/sG4ID9bVUcz7sNv3kmWmg13UUdJlpdpWrUR52dPMK2xBK5+CwznDgcCpM2SqL5+HQxL5qj7qufeYCU1RMJHvaH5lQOvPDmXdhh32UaBa2fc/RtdAxzpm5SYVkWPdf0//+tQXdNv7pxMLE8EnOZ7BX2v0ZoI504ZRtl3SnvrTZj0qEvE/g9ZiEmXD4wm/aTRPguxCitUxVoDpThpwZK9ypZmO6VFHOVEHpYz37MK123vvexe7E54Kmhbxxq+h4fvMi9rC48qal9J9iZD0kbVolaD3RUFrR0Uue4FlJBY3MkMxm902NQR4IS0w3YDXp6B2WtZJlX+O+pI3z60xYBts3IZWGWfFKYdpkirkSZG+ksqU/TBkF5ZNv/vnGFi8114vjlSHWTRiRsy4SdCAsOpJek7Jx4ARiam+ElYvOzvVJDLVMTgQkamGUKXsrUW5dvdJZr+MP8N/EDAhDXLS8a9Esr4ZQgPXEvW0am84IwNNRdFuWcSmU5x0AbG3JBnL1zt1k3nMIQC"

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

      // setData(data)
      setData(giftItems)

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
