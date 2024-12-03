import { useEffect, useState } from "react"
import { ScrollView, Text, View } from "react-native"
import { LEDTileExamples } from "../../utility"
import LEDCalculatorScreenDropdown from "./LEDCalculatorScreenComponents/LEDCalculatorScreenDropdown"
import LEDCalculatorScreenWidthHeightFeetACTUAL from "./LEDCalculatorScreenComponents/LEDCalculatorScreenWidthHeightFeetACTUAL"

export default function LEDCalculatorScreenTwo() {
  const [tiles, setTiles] = useState([])

  const [selectedTile, setSelectedTile] = useState({})

  const [widthFeet, setWidthFeet] = useState(0)
  const [heightFeet, setHeightFeet] = useState(0)

  const [widthFeetActual, setWidthFeetActual] = useState(0)
  const [heightFeetActual, setHeightFeetActual] = useState(0)

  const [widthFeetRounded, setWidthFeetRounded] = useState(0)
  const [heightFeetRounded, setHeightFeetRounded] = useState(0)

  const [widthPanel, setWidthPanel] = useState(0)
  const [heightPanel, setHeightPanel] = useState(0)

  const [weight, setWeight] = useState(0)

  const [isEditingWidthFeet, setIsEditingWidthFeet] = useState(false)
  const [isEditingHeightFeet, setIsEditingHeightFeet] = useState(false)

  useEffect(() => {
    setTiles(LEDTileExamples)
  }, [])

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
    <ScrollView>
      <LEDCalculatorScreenDropdown
        tiles={tiles}
        selectedTile={selectedTile}
        setSelectedTile={setSelectedTile}
        clearState={clearState}
      />
      <LEDCalculatorScreenWidthHeightFeetACTUAL
        selectedTile={selectedTile}
        widthFeet={widthFeet}
        setWidthFeet={setWidthFeet}
        heightFeet={heightFeet}
        setHeightFeet={setHeightFeet}
        setIsEditingWidthFeet={setIsEditingWidthFeet}
        setIsEditingHeightFeet={setIsEditingHeightFeet}
      />
    </ScrollView>
  )
}
