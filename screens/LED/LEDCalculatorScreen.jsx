import { useEffect, useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Platform,
  Button,
  SafeAreaView,
} from "react-native"
import { LEDTileExamples } from "../../utility"
import { Dropdown } from "react-native-element-dropdown"

export default function LEDCalculatorScreen() {
  const [tiles, setTiles] = useState([])

  const [widthFeet, setWidthFeet] = useState(0)
  const [heightFeet, setHeightFeet] = useState(0)

  const [widthFeetActual, setWidthFeetActual] = useState(0)
  const [heightFeetActual, setHeightFeetActual] = useState(0)

  const [widthFeetRounded, setWidthFeetRounded] = useState(0)
  const [heightFeetRounded, setHeightFeetRounded] = useState(0)

  const [widthPanel, setWidthPanel] = useState(0)
  const [heightPanel, setHeightPanel] = useState(0)

  const [selectedTile, setSelectedTile] = useState({})

  const [isTileDropdownFocus, setIsTileDropdownFocus] = useState(false)

  const [isEditingWidthFeet, setIsEditingWidthFeet] = useState(false)
  const [isEditingHeightFeet, setIsEditingHeighthFeet] = useState(false)

  const [weight, setWeight] = useState(0)

  //00 KEY
  // Comments
  //mm WIDTH
  //yy WIDTH
  //cc WEIGHT
  //rr MISC.
  //gg Functions

  // get and set Tile Array on render
  useEffect(() => {
    setTiles(LEDTileExamples)
  }, [])

  //mm useEffect to convert width PANELS to width FEET
  useEffect(() => {
    if (selectedTile.id && !isEditingWidthFeet) {
      setWidthFeet(widthPanel * ((selectedTile.widthMM / 1000) * 3.28084))
      setWidthFeetActual(widthPanel * ((selectedTile.widthMM / 1000) * 3.28084))
    }
    if (selectedTile.id && !isEditingWidthFeet) {
      setWidthFeetRounded(
        Math.ceil(widthPanel * ((selectedTile.widthMM / 1000) * 3.28084))
      )
    }
  }, [widthPanel])

  //mm useEffect to convert width FEET to width PANELS
  useEffect(() => {
    if (selectedTile.id && isEditingWidthFeet) {
      // Debounce or batch state updates
      const panel = Math.floor((widthFeet * 304.8) / selectedTile.widthMM)
      setWidthPanel(panel)

      // Ensure dependent calculations use the updated value
      setTimeout(() => {
        const feetActual = (selectedTile.widthMM / 1000) * 3.28084 * panel
        setWidthFeetActual(feetActual)
      }, 0) // Timeout ensures state update is completed
    }
  }, [widthFeet])

  //yy useEffect to convert height PANELS to height FEET
  useEffect(() => {
    if (selectedTile.id && !isEditingHeightFeet) {
      setHeightFeet(heightPanel * ((selectedTile.heightMM / 1000) * 3.28084))
      setHeightFeetActual(
        heightPanel * ((selectedTile.heightMM / 1000) * 3.28084)
      )
    }
    if (selectedTile.id && !isEditingHeightFeet) {
      setHeightFeetRounded(
        Math.ceil(heightPanel * ((selectedTile.heightMM / 1000) * 3.28084))
      )
    }
  }, [heightPanel])

  //yy useEffect to convert height FEET to height PANELS
  useEffect(() => {
    if (selectedTile.id && isEditingHeightFeet) {
      const panel = Math.floor((heightFeet * 304.8) / selectedTile.heightMM)
      setHeightPanel(panel)

      setTimeout(() => {
        const feetActual = (selectedTile.heightMM / 1000) * 3.28084 * panel
        setHeightFeetActual(feetActual)
      }, 0)
    }
  }, [heightFeet])

  //cc useEffect to convert PANELS to WEIGHT
  useEffect(() => {
    if (selectedTile.id && widthPanel === 0) {
      setWeight(heightPanel * selectedTile.weightLBS)
    } else if (selectedTile.id && heightPanel === 0) {
      setWeight(widthPanel * selectedTile.weightLBS)
    } else if (selectedTile.id) {
      setWeight(widthPanel * heightPanel * selectedTile.weightLBS)
    }
  }, [widthPanel, heightPanel])

  //rr Add key of "tileFullName" with value of "brand-card-pixelPitch" to tile object
  const concatenatedTileLabels = tiles.map((tile) => ({
    ...tile,
    tileFullName: `${tile.tileBrandId} ${tile.tileCardId} ${tile.pixelPitch}mm`,
  }))

  //rr Sort Dropdown list alphanumerically
  concatenatedTileLabels.sort(
    (a, b) =>
      a.tileBrandId.localeCompare(b.tileBrandId) ||
      a.tileCardId.localeCompare(b.tileCardId) ||
      a.pixelPitch - b.pixelPitch
  )

  //gg Function to clear all 4 <TextInput />'s
  const clearState = () => {
    // width
    setWidthFeet(0)
    setWidthFeetActual(0)
    setWidthFeetRounded(0)
    setWidthPanel(0)

    // height
    setHeightFeet(0)
    setHeightFeetActual(0)
    setHeightFeetRounded(0)
    setHeightPanel(0)

    // weight
    setWeight(0)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView keyboardShouldPersistTaps="handled" style={styles.container}>
        <View>
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
              clearState()
              setSelectedTile(item)
              console.log(item)
            }}
          />
          {/* //mm WIDTH FEET --> ROUNDED */}
          <View style={styles.sizeContainer}>
            <View style={styles.widthContainer}>
              <Text style={styles.sizeText}>{`Width (ft):`}</Text>
              <TextInput
                style={styles.textInput}
                value={
                  widthFeetRounded === 0 ? "" : widthFeetRounded.toString()
                }
                keyboardType={Platform.select({
                  ios: "decimal-pad",
                  android: "numeric",
                })}
                textAlign="right"
                onFocus={(e) => {
                  setIsEditingWidthFeet(true)
                  if (Object.keys(selectedTile).length === 0) {
                    alert("Please select a tile")
                    e.target.blur()
                  }
                }}
                onBlur={() => setIsEditingWidthFeet(false)}
                onChangeText={(value) => {
                  if (/^(\d+(\.\d*)?)?$/.test(value)) {
                    setWidthFeet(value === "" ? "" : parseFloat(value))
                    setWidthFeetRounded(value)
                  }
                }}
              />
            </View>
            {/* //yy HEIGHT FEET --> ROUNDED */}
            <View style={styles.heightContainer}>
              <Text style={styles.sizeText}>{`Height (ft):`}</Text>
              <TextInput
                style={styles.textInput}
                value={
                  heightFeetRounded === 0 ? "" : heightFeetRounded.toString()
                }
                keyboardType={Platform.select({
                  ios: "decimal-pad",
                  android: "numeric",
                })}
                textAlign="right"
                onFocus={(e) => {
                  setIsEditingHeighthFeet(true)
                  if (Object.keys(selectedTile).length === 0) {
                    alert("Please select a tile")
                    e.target.blur()
                  }
                }}
                onBlur={() => setIsEditingHeighthFeet(false)}
                onChangeText={(value) => {
                  if (/^(\d+(\.\d*)?)?$/.test(value)) {
                    setHeightFeet(value === "" ? "" : parseFloat(value))
                    setHeightFeetRounded(value)
                  }
                }}
              />
            </View>
          </View>
          {/* //mm WIDTH FEET --> ACTUAL */}
          <View style={styles.sizeContainer}>
            <View style={styles.widthContainer}>
              <Text
                style={[styles.sizeText, { color: "#808080" }]}
              >{`Actual Width:`}</Text>
              <TextInput
                style={[styles.textInput, { color: "#808080" }]}
                value={
                  widthFeetActual === 0
                    ? ""
                    : widthFeetActual.toFixed(2).toString()
                }
                textAlign="right"
                editable={false}
              />
            </View>
            {/* //yy HEIGHT FEET --> ACTUAL */}
            <View style={styles.heightContainer}>
              <Text
                style={[styles.sizeText, { color: "#808080" }]}
              >{`Actual Height:`}</Text>
              <TextInput
                style={[styles.textInput, { color: "#808080" }]}
                value={
                  heightFeetActual === 0
                    ? ""
                    : heightFeetActual.toFixed(2).toString()
                }
                textAlign="right"
                editable={false}
              />
            </View>
          </View>
          {/* //mm WIDTH --> PANELS */}
          <View style={styles.sizeContainer}>
            <View style={styles.widthContainer}>
              <Text style={styles.sizeText}>{`Width (panels):`}</Text>
              <TextInput
                style={styles.textInput}
                value={widthPanel === 0 ? "" : widthPanel.toString()}
                keyboardType={Platform.select({
                  ios: "decimal-pad",
                  android: "numeric",
                })}
                textAlign="right"
                onFocus={(e) => {
                  setIsEditingWidthFeet(false)
                  if (Object.keys(selectedTile).length === 0) {
                    alert("Please select a tile")
                    e.target.blur()
                  }
                }}
                onBlur={() => {
                  setIsEditingWidthFeet(true)
                }}
                onChangeText={(value) =>
                  setWidthPanel(value === "" ? "" : parseFloat(value) || 0)
                }
              />
            </View>
            {/* //yy HEIGHT --> PANELS */}
            <View style={styles.heightContainer}>
              <Text style={styles.sizeText}>{`Height (panels):`}</Text>
              <TextInput
                style={styles.textInput}
                value={heightPanel === 0 ? "" : heightPanel.toString()}
                keyboardType={Platform.select({
                  ios: "decimal-pad",
                  android: "numeric",
                })}
                textAlign="right"
                onFocus={(e) => {
                  setIsEditingHeighthFeet(false)
                  if (Object.keys(selectedTile).length === 0) {
                    alert("Please select a tile")
                    e.target.blur()
                  }
                }}
                onBlur={() => {
                  setIsEditingHeighthFeet(true)
                }}
                onChangeText={(value) =>
                  setHeightPanel(value === "" ? "" : parseFloat(value) || 0)
                }
              />
            </View>
          </View>
          <View style={styles.buttonView}>
            <Button title="Clear" onPress={() => clearState()}></Button>
          </View>
          <View style={styles.weightContainer}>
            <Text style={[styles.weightText, { color: "#808080" }]}>
              Weight (LBS):
            </Text>
            <TextInput
              style={[styles.textInput, { width: "33%", color: "#808080" }]}
              value={weight === 0 ? "" : weight.toString()}
              editable={false}
              textAlign="right"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
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
  weightContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  sizeText: {
    fontSize: 24,
  },
  weightText: {
    fontSize: 24,
    color: "#808080",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 4,
    width: "60%",
    height: 40,
    padding: 8,
    fontSize: 26,
    textAlign: "right",
    ...Platform.select({
      android: {
        fontSize: 20,
      },
    }),
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
    fontSize: 20,
  },
  placeholderStyle: {
    fontSize: 20,
  },
  selectedTextStyle: {
    fontSize: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 20,
  },

  // Button
  buttonView: {
    width: "20%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 12,
    marginBottom: 6,
  },
})
