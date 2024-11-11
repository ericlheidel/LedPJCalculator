import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { LEDTileExamples } from "../../utility"
import LEDTileComponent from "../../components/LED/LEDTileComponent"
import LEDTileDropDownComponent from "../../components/LED/LEDTileDropDownComponent"
import { useEffect, useState } from "react"

export default function LEDTilesScreen() {
  const [selectKey, setSelectKey] = useState("All Brands")
  const [filteredTiles, setFilteredTiles] = useState("")

  useEffect(() => {
    const matchingTiles = LEDTileExamples.filter(
      (tile) => tile.tileBrandId === selectKey
    )

    setFilteredTiles(matchingTiles)
  }, [selectKey])

  return (
    <ScrollView style={styles.container}>
      <View>
        <LEDTileDropDownComponent setSelectKey={setSelectKey} />
      </View>
      <View>
        {selectKey === "All Brands" &&
          LEDTileExamples.map((tile) => {
            return <LEDTileComponent key={tile.id} tile={tile} />
          })}
        {selectKey !== "All Brands" &&
          filteredTiles.map((tile) => {
            return <LEDTileComponent key={tile.id} tile={tile} />
          })}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
})
