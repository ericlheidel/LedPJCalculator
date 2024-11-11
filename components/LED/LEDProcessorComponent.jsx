// import { useState } from "react"
import {
  // Dimensions,
  Image,
  // Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"
// import { TouchableOpacity } from "react-native-gesture-handler"

export default function LEDProcessorComponent({ processor }) {
  // const PressableImage = () => {
  //   const [modalVisible, setModalVisible] = useState(false)

  //   const handleImagePress = () => {
  //     setModalVisible(true)
  //     console.log("modal is visible")
  //   }

  //   const handleModalClose = () => {
  //     setModalVisible(false)
  //     console.log("Modal is hidden")
  //   }

  //   return (
  //     <>
  //       {/* THUMBNAIL IMAGE */}
  //       <TouchableOpacity onPress={handleImagePress}>
  //         <Image
  //           source={require("../../assets/favicon.png")}
  //           style={styles.image}
  //         />
  //       </TouchableOpacity>

  //       {/* FULL SIZE IMAGE MODAL */}
  //       <Modal
  //         visible={modalVisible}
  //         transparent={true}
  //         animationType="slide"
  //         onRequestClose={handleModalClose}
  //       >
  //         <TouchableOpacity
  //           style={styles.modalOverlay}
  //           onPress={handleModalClose}
  //         >
  //           <Image
  //             source={require("../../assets/favicon.png")}
  //             style={styles.fullImage}
  //             resizeMode="contain"
  //           />
  //         </TouchableOpacity>
  //       </Modal>
  //     </>
  //   )
  // }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.processor}>
        <Image
          source={require("../../assets/favicon.png")}
          style={styles.image}
        />
        {/* <PressableImage /> */}
        <View style={styles.processorDetails}>
          <Text style={styles.processorTitle}>
            {processor.processorBrand} {processor.processorModel}
          </Text>
          <Text style={styles.processorDetail}>
            Card Type:{" "}
            <Text style={styles.boldText}>{processor.processorCard}</Text>
          </Text>
          <Text style={styles.processorDetail}>
            Number of Ports:{" "}
            <Text style={styles.boldText}>{processor.numberOfPorts}</Text>
          </Text>
          <Text style={styles.processorDetail}>
            Max Resolution:{" "}
            <Text style={styles.boldText}>{processor.maxResolution}</Text>
          </Text>
          <Text style={styles.processorDetail}>
            {processor.fiberExtender && (
              <Text>
                Includes: <Text style={styles.boldText}>Fiber Extender</Text>
              </Text>
            )}
          </Text>
          <Text style={styles.processorDetail}>
            Controllers:{" "}
            <Text style={styles.boldText}>
              {processor.processorControlTypeId}
            </Text>
          </Text>
          <Text style={styles.processorDetail}>
            Redundancy:{" "}
            <Text style={styles.boldText}>
              {processor.processorRedundancyTypeId}
            </Text>
          </Text>
          <Text style={styles.processorDetail}>
            Processor Software:{" "}
            <Text style={styles.boldText}>
              {processor.processorSoftwareTypeId}
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  processor: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
    alignSelf: "center",
  },
  processorDetails: {
    marginTop: 8,
  },
  processorTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
    textAlign: "center",
  },
  processorDetail: {
    fontSize: 18,
    color: "#666",
    marginBottom: 8,
  },
  boldText: {
    color: "black",
    fontWeight: "600",
  },
  // MODAL StyleSheet
  // modalOverlay: {
  //   flex: 1,
  //   backgroundColor: "rgba(0,0,0,1)",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // fullImage: {
  //   width: Dimensions.get("window").width,
  //   height: "80%",
  // },
})
