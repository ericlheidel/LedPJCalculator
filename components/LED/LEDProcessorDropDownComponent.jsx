import React, { useEffect, useState } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from "react-native"
import { ProcessorExamples } from "../../utility"

export default function LEDProcessorDropDownComponent({ setSelectKey }) {
  const [selectedValue, setSelectedValue] = useState("All Brand")
  const [modalVisible, setModalVisible] = useState(false)
  const [options, setOptions] = useState([])

  useEffect(() => {
    let options = ["All Brands"]

    ProcessorExamples.map((processor) => {
      options.push(processor.processorBrand)
    })

    setOptions(options)
  }, [])

  const handleSelect = (value) => {
    setSelectedValue(value)
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.selectBox}
      >
        <Text style={styles.selectedText}>{selectedValue}</Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    handleSelect(item)
                    setSelectKey(item)
                  }}
                  style={styles.option}
                >
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  selectBox: {
    padding: 12,
    marginTop: 12,
    borderWidth: 1,
    borderRadius: 8,
    width: 200,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  selectedText: {
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
  },
  option: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  optionText: {
    fontSize: 16,
  },
})
