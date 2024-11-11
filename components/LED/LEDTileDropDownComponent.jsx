import { useEffect, useState } from "react"
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { LEDTileExamples } from "../../utility"

export default function LEDTileDropDownComponent({ setSelectKey }) {
  const [selectedValue, setSelectedValue] = useState("All Brands")
  const [modalVisible, setModalVisible] = useState(false)
  const [options, setOptions] = useState([])

  useEffect(() => {
    let options = ["All Brands"]

    LEDTileExamples.map((tile) => {
      options.push(tile.tileBrandId)
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
        animationStyle="slide"
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
