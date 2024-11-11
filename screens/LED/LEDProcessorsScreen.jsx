import { ScrollView, StyleSheet, View } from "react-native"
import { ProcessorExamples } from "../../utility"
import LEDProcessorComponent from "../../components/LED/LEDProcessorComponent"
import LEDProcessorDropDownComponent from "../../components/LED/LEDProcessorDropDownComponent"
import { useEffect, useState } from "react"

export default function LEDProcessorsScreen() {
  const [selectKey, setSelectKey] = useState("All Brands")
  const [filteredProcessors, setFilterProcessors] = useState("")

  useEffect(() => {
    const matchingProcessors = ProcessorExamples.filter(
      (processor) => processor.processorBrand === selectKey
    )

    setFilterProcessors(matchingProcessors)
  }, [selectKey])

  return (
    <ScrollView style={styles.container}>
      <View>
        <LEDProcessorDropDownComponent setSelectKey={setSelectKey} />
      </View>
      <View>
        {selectKey === "All Brands" &&
          ProcessorExamples.map((processor) => {
            return (
              <LEDProcessorComponent key={processor.id} processor={processor} />
            )
          })}
        {selectKey !== "All Brands" &&
          filteredProcessors.map((processor) => {
            return (
              <LEDProcessorComponent key={processor.id} processor={processor} />
            )
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
