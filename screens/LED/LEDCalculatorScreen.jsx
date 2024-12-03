import { useEffect, useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Platform,
} from "react-native"
import { LEDTileExamples } from "../../utility"
import { Dropdown } from "react-native-element-dropdown"

export default function LEDCalculatorScreen() {
  const [tiles, setTiles] = useState([])

  const [widthFeet, setWidthFeet] = useState(0)
  const [heightFeet, setHeightFeet] = useState(0)

  const [widthPanel, setWidthPanel] = useState(0)
  const [heightPanel, setHeightPanel] = useState(0)

  const [selectedTile, setSelectedTile] = useState({})

  const [isTileDropdownFocus, setIsTileDropdownFocus] = useState(false)

  const [isEditingWidthFeet, setIsEditingWidthFeet] = useState(false)
  const [isEditingHeightFeet, setIsEditingHeighthFeet] = useState(false)

  useEffect(() => {
    setTiles(LEDTileExamples)
  }, [])

  //mm useEffect to convert width PANELS to width FEET
  useEffect(() => {
    if (selectedTile.id && !isEditingWidthFeet) {
      setWidthFeet(widthPanel * ((selectedTile.widthMM / 1000) * 3.28084))
    }
  }, [widthPanel])

  //mm useEffect to convert width FEET to width PANELS
  useEffect(() => {
    if (selectedTile.id && isEditingWidthFeet) {
      setWidthPanel((widthFeet * 304.8) / selectedTile.widthMM)
    }
  }, [widthFeet])

  //yy useEffect to convert height PANELS to height FEET
  useEffect(() => {
    if (selectedTile.id && !isEditingHeightFeet) {
      setHeightFeet(heightPanel * ((selectedTile.heightMM / 1000) * 3.28084))
    }
  }, [heightPanel])

  //yy useEffect to convert height FEET to height PANELS
  useEffect(() => {
    if (selectedTile.id && isEditingHeightFeet) {
      setHeightPanel((heightFeet * 304.8) / selectedTile.heightMM)
    }
  }, [heightFeet])

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
    <ScrollView>
      <View style={styles.container}>
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
          placeholder={!isTileDropdownFocus ? "Select a Tile" : "..."}
          onFocus={() => setIsTileDropdownFocus(true)}
          onBlur={() => setIsTileDropdownFocus(false)}
          onChange={(item) => {
            setSelectedTile(item)
            console.log(item)
          }}
        />
        {/* //mm SIZE === FEET CONTAINER */}
        {/* //mm WIDTH FEET */}
        <View style={styles.sizeContainer}>
          <View style={styles.widthContainer}>
            <Text style={styles.sizeText}>{`Width (ft):`}</Text>
            <TextInput
              style={styles.textInput}
              value={widthFeet === 0 ? "" : widthFeet.toString()}
              keyboardType={Platform.OS === "ios" ? "decimal-pad" : ""}
              textAlign="right"
              onFocus={(e) => {
                setIsEditingWidthFeet(true)
                if (Object.keys(selectedTile).length === 0) {
                  alert("Please select a tile")
                  e.target.blur()
                }
              }}
              onBlur={() => setIsEditingWidthFeet(false)}
              onChangeText={(value) =>
                setWidthFeet(value === "" ? "" : parseFloat(value) || 0)
              }
            />
          </View>
          {/* //mm HEIGHT FEET */}
          <View style={styles.heightContainer}>
            <Text style={styles.sizeText}>{`Height (ft):`}</Text>
            <TextInput
              style={styles.textInput}
              value={heightFeet === 0 ? "" : heightFeet.toString()}
              keyboardType={Platform.OS === "ios" ? "decimal-pad" : ""}
              textAlign="right"
              onFocus={(e) => {
                setIsEditingHeighthFeet(true)
                if (Object.keys(selectedTile).length === 0) {
                  alert("Please select a tile")
                  e.target.blur()
                }
              }}
              onBlur={() => setIsEditingHeighthFeet(false)}
              onChangeText={(value) =>
                setHeightFeet(value === "" ? "" : parseFloat(value) || 0)
              }
            />
          </View>
        </View>
        {/* //yy SIZE === PANELS CONTAINER */}
        {/* //yy WIDTH PANELS */}
        <View style={styles.sizeContainer}>
          <View style={styles.widthContainer}>
            <Text style={styles.sizeText}>{`Width (panels):`}</Text>
            <TextInput
              style={styles.textInput}
              value={widthPanel === 0 ? "" : widthPanel.toString()}
              keyboardType={Platform.OS === "ios" ? "decimal-pad" : ""}
              textAlign="right"
              onFocus={(e) => {
                setIsEditingWidthFeet(false)
                if (Object.keys(selectedTile).length === 0) {
                  alert("Please select a tile")
                  e.target.blur()
                }
              }}
              onBlur={() => setIsEditingWidthFeet(true)}
              onChangeText={(value) =>
                setWidthPanel(value === "" ? "" : parseFloat(value) || 0)
              }
            />
          </View>
          {/* //yy HEIGHT PANELS */}
          <View style={styles.heightContainer}>
            <Text style={styles.sizeText}>{`Height (panels):`}</Text>
            <TextInput
              style={styles.textInput}
              value={heightPanel === 0 ? "" : heightPanel.toString()}
              keyboardType={Platform.OS === "ios" ? "decimal-pad" : ""}
              textAlign="right"
              onFocus={(e) => {
                setIsEditingHeighthFeet(false)
                if (Object.keys(selectedTile).length === 0) {
                  alert("Please select a tile")
                  e.target.blur()
                }
              }}
              onBlur={() => setIsEditingHeighthFeet(true)}
              onChangeText={(value) =>
                setHeightPanel(value === "" ? "" : parseFloat(value) || 0)
              }
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    padding: 6,
  },
  sizeContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 16,
  },
  widthContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  heightContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  sizeText: {
    fontSize: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    width: "60%",
    height: 40,
    padding: 8,
    fontSize: 24,
    textAlign: "right",
  },

  // Dropdown
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
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
})
