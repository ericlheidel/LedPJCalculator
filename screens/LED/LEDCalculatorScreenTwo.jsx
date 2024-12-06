import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import LEDCalculatorDropdownComponent from "./Calculator/LEDCalculatorDropdownComponent"
import { useEffect, useState } from "react"
import { LEDTileExamples } from "../../utility"
import LEDCalculatorSizeRoundedComponent from "./Calculator/LEDCalculatorSizeRoundedComponent"
import LEDCalculatorSizeActualComponent from "./Calculator/LEDCalculatorSizeActualComponent"
import LEDCalculatorSizePanelsComponent from "./Calculator/LEDCalculatorSizePanelsComponent"
import LEDCalculatorWeightComponent from "./Calculator/LEDCalculatorWeightComponent"

export default function LEDCalculatorScreenTwo() {
  const [tiles, setTiles] = useState([])

  const [widthFeet, setWidthFeet] = useState(0)
  const [heightFeet, setHeightFeet] = useState(0)

  const [widthFeetRounded, setWidthFeetRounded] = useState(0)
  const [heightFeetRounded, setHeightFeetRounded] = useState(0)

  const [widthFeetActual, setWidthFeetActual] = useState(0)
  const [heightFeetActual, setHeightFeetActual] = useState(0)

  const [widthPanels, setWidthPanels] = useState(0)
  const [heightPanels, setHeightPanels] = useState(0)

  const [isEditingWidthFeet, setIsEditingWidthFeet] = useState(false)
  const [isEditingHeightFeet, setIsEditingHeightFeet] = useState(false)

  const [weight, setWeight] = useState(0)

  const [selectedTile, setSelectedTile] = useState({})

  //00 KEY
  // Comments
  //mm WIDTH
  //yy WIDTH
  //cc WEIGHT
  //rr MISC.
  //gg Functions

  // get and set Tiles
  useEffect(() => {
    setTiles(LEDTileExamples)
  }, [])

  //mm useEffect to calculate WIDTH, from Panels to Feet
  useEffect(() => {
    if (selectedTile.id && !isEditingWidthFeet) {
      setWidthFeet(widthPanels * ((selectedTile.widthMM / 1000) * 3.28084))
      setWidthFeetRounded(
        Math.ceil(widthPanels * ((selectedTile.widthMM / 1000) * 3.28084))
      )
      setWidthFeetActual(
        widthPanels * ((selectedTile.widthMM / 1000) * 3.28084)
      )
    }
  }, [widthPanels])

  //mm useEffect to calculate WIDTH, from Feet to Panels
  useEffect(() => {
    if (selectedTile.id && isEditingWidthFeet) {
      const panels = Math.floor((widthFeet * 304.8) / selectedTile.widthMM)
      setWidthPanels(panels)

      setTimeout(() => {
        const feetActual = (selectedTile.widthMM / 1000) * 3.28084 * panels
        setWidthFeetActual(feetActual)
      }, 0)
    }
  }, [widthFeet])

  //yy useEffect to calculate HEIGHT, from Panels to Feet
  useEffect(() => {
    if (selectedTile.id && !isEditingHeightFeet) {
      setHeightFeet(heightPanels * ((selectedTile.heightMM / 1000) * 3.28084))
      setHeightFeetRounded(
        Math.ceil(heightPanels * ((selectedTile.heightMM / 1000) * 3.28084))
      )
      setHeightFeetActual(
        heightPanels * ((selectedTile.heightMM / 1000) * 3.28084)
      )
    }
  }, [heightPanels])

  //yy useEffect to calculate HEIGHT, from Feet to Panels
  useEffect(() => {
    if (selectedTile.id && isEditingHeightFeet) {
      const panels = Math.floor((heightFeet * 304.8) / selectedTile.heightMM)
      setHeightPanels(panels)

      setTimeout(() => {
        const feetActual = (selectedTile.heightMM / 1000) * 3.28084 * panels
        setHeightFeetActual(feetActual)
      }, 0)
    }
  }, [heightFeet])

  //cc useEffect to calculate weight
  useEffect(() => {
    if (selectedTile.id && widthPanels === 0) {
      setWeight(heightPanels * selectedTile.weightLBS)
    } else if (selectedTile.id && heightPanels === 0) {
      setWeight(widthPanels * selectedTile.weightLBS)
    } else if (selectedTile.id) {
      setWeight(widthPanels * heightPanels * selectedTile.weightLBS)
    }
  }, [widthPanels, heightPanels])

  //gg Function to clear all state
  const clearState = () => {
    //width
    setWidthFeet(0)
    setWidthFeetRounded(0)
    setWidthFeetActual(0)
    setWidthPanels(0)

    // height
    setHeightFeet(0)
    setHeightFeetRounded(0)
    setHeightFeetActual(0)
    setHeightPanels(0)

    // weight
    setWeight(0)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View>
          <LEDCalculatorDropdownComponent
            tiles={tiles}
            selectedTile={selectedTile}
            setSelectedTile={setSelectedTile}
            clearState={clearState}
          />
        </View>

        <View>
          <LEDCalculatorSizeRoundedComponent
            selectedTile={selectedTile}
            setWidthFeet={setWidthFeet}
            setHeightFeet={setHeightFeet}
            widthFeetRounded={widthFeetRounded}
            setWidthFeetRounded={setWidthFeetRounded}
            heightFeetRounded={heightFeetRounded}
            setHeightFeetRounded={setHeightFeetRounded}
            setIsEditingWidthFeet={setIsEditingWidthFeet}
            setIsEditingHeightFeet={setIsEditingHeightFeet}
          />
        </View>

        <View>
          <LEDCalculatorSizeActualComponent
            widthFeetActual={widthFeetActual}
            heightFeetActual={heightFeetActual}
          />
        </View>

        <View>
          <LEDCalculatorSizePanelsComponent
            selectedTile={selectedTile}
            widthPanels={widthPanels}
            setWidthPanels={setWidthPanels}
            heightPanels={heightPanels}
            setHeightPanels={setHeightPanels}
            setIsEditingWidthFeet={setIsEditingWidthFeet}
            setIsEditingHeightFeet={setIsEditingHeightFeet}
          />
        </View>

        <View style={styles.buttonView}>
          <Button title="Clear" onPress={() => clearState()} />
        </View>

        <View>
          <LEDCalculatorWeightComponent weight={weight} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  buttonView: {
    width: "20%",
    marginHorizontal: "auto",
  },
})
