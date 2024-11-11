// import { useState } from "react"
import {
  // Dimensions,
  Image,
  // Modal,
  ScrollView,
  StyleSheet,
  Text,
  // TouchableOpacity,
  View,
} from "react-native"

export default function LEDTileComponent({ tile }) {
  // const PressableImage = () => {
  //   const [modalVisible, setModalVisible] = useState(false)

  //   const handleImagePress = () => {
  //     setModalVisible(true)
  //     console.log("Modal is visible")
  //   }

  //   const handleModalClose = () => {
  //     setModalVisible(false)
  //     console.log("modal is hidden")
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
      <View style={styles.tile}>
        <Image
          source={require("../../assets/favicon.png")}
          style={styles.image}
        />
        {/* <PressableImage /> */}
        <View style={styles.tileDetails}>
          <Text style={styles.tileTitle}>
            {tile.tileBrandId} {tile.pixelPitch}mm
          </Text>
          {tile.tileModel ? (
            <Text style={styles.tileDetail}>
              Model: <Text style={styles.boldText}>{tile.tileModel}</Text>
            </Text>
          ) : (
            ""
          )}
          <Text style={styles.tileDetail}>
            Card Type: <Text style={styles.boldText}>{tile.tileCardId}</Text>
          </Text>
          <Text style={styles.tileDetail}>
            Pitch: <Text style={styles.boldText}>{tile.pixelPitch}mm</Text>
          </Text>
          <Text style={styles.tileDetail}>
            Dimensions:{" "}
            <Text style={styles.boldText}>
              {tile.widthMM}mm x {tile.heightMM}mm
            </Text>
          </Text>
          <Text style={styles.tileDetail}>
            Pixel Count:{" "}
            <Text style={styles.boldText}>
              {tile.widthPixel} x {tile.heightPixel}
            </Text>
          </Text>
          <Text style={styles.tileDetail}>
            Tile Weight: <Text style={styles.boldText}>{tile.weightLBS}</Text>
          </Text>
          <Text style={styles.tileDetail}>
            Processor:{" "}
            <Text style={styles.boldText}>{tile.processorTypeId}</Text>
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
  tile: {
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
  tileDetails: {
    marginTop: 8,
  },
  tileTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
    textAlign: "center",
  },
  tileDetail: {
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
