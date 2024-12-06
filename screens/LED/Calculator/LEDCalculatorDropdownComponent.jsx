import { useEffect, useState } from "react"
import { StyleSheet, Text } from "react-native"
import { Dropdown } from "react-native-element-dropdown"

export default function LEDCalculatorDropdownComponent({
  tiles,
  selectedTile,
  setSelectedTile,
  clearState,
}) {
  const [isTileDropdownFocus, setIsTileDropdownFocus] = useState(false)

  const concatenatedTileLabels = tiles.map((tile) => ({
    ...tile,
    tileFullName: `${tile.tileBrandId} ${tile.tileCardId} ${tile.pixelPitch}mm`,
  }))

  concatenatedTileLabels.sort(
    (a, b) =>
      a.tileBrandId.localeCompare(b.tileBrandId) ||
      a.tileCardId.localeCompare(b.tileCardId) ||
      a.pixelPitch - b.pixelPitch
  )

  return (
    <Dropdown
      style={[
        styles.dropdown,
        isTileDropdownFocus && { borderColor: "blue", borderWidth: 2 },
      ]}
      value={selectedTile}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      search
      data={concatenatedTileLabels}
      labelField="tileFullName"
      valueField="id"
      placeholder={!isTileDropdownFocus ? "Select a Tile..." : "..."}
      onFocus={() => setIsTileDropdownFocus(true)}
      onBlur={() => setIsTileDropdownFocus(false)}
      onChange={(item) => {
        clearState()
        setSelectedTile(item)
        console.log(item)
      }}
    />
  )
}

const styles = StyleSheet.create({
  container: {},
  dropdown: {
    height: 50,
    width: "80%",
    marginTop: 12,
    marginHorizontal: "auto",
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  label: {},
  placeholderStyle: {
    fontSize: 20,
  },
  selectedTextStyle: {
    fontSize: 20,
  },
  inputSearchStyle: {
    fontSize: 20,
    height: 40,
  },
})
