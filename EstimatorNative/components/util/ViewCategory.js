import { useState, useEffect, useContext } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  TextInput,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import DefaultText from "../ui/DefaultText";
import { Entypo, Ionicons } from "@expo/vector-icons";
import PagerView from "react-native-pager-view";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";

import Colors from "../../constants/colors";
import RepairCard from "./RepairCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { PropertyContext } from "../../store/context/property-context";

function ViewCategory({ navigation, route }) {
  const propertyCtx = useContext(PropertyContext);
  const property = propertyCtx.property;
  const category = propertyCtx.property.repairs.filter(id === route.params.categoryId);
  // let propertyTotalCost = property.totalCost;

  const [catCost, setCatCost] = useState(0.0);
  const [comments, setComments] = useState("");
  const [images, setImages] = useState(category.images);
  const [propertyTotal, setPropertyTotal] = useState(propertyCtx.property.totalCost);

  // Passed to and called by RepairCard as RepairCard.updateCatTotal()
  function updateCatTotal(newTotal, oldTotal) {
    // console.log("sanity: $" + newTotal);

    // console.log(property.repairs[category.name]);

    const oldCost = catCost;
    setCatCost(catCost + newTotal - oldTotal);
    // setPropertyTotal(propertyTotal - oldCost + catCost);
    //set property.repairs.filter(category.name)
   
  }

  // const [image, setImage] = useState(null);
  const [takenImage, setTakenImage] = useState(null);
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermissions() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app."
      );
      return false;
    }

    return true;
  }

  async function takePicture() {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const takenimage = await launchCameraAsync({
      quality: 0.5,
      base64: true,
    });
    setTakenImage(takenimage.assets);
  }

  // Updates and appends to images state when an image is taken
  useEffect(() => {
    if (takenImage) {
      setImages([
        ...images,
        { base64: "data:image/png;base64, " + takenImage[0].base64 },
      ]);
    }
  }, [takenImage]);

  // Updates category's list of images when a new image is taken and added to images state
  useEffect(() => {
    category.images = [...images];
  }, [images]);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [
                { opacity: 0.5, backgroundColor: "#ffff" },
                { justifyContent: "center" },
              ]
            : { justifyContent: "center" }
        }
        onPress={() => {
          propertyCtx.property.totalCost = propertyTotal;
          navigation.navigate({
            name: "ListCategories",
            params: { property: property },
            merge: true,
          });
        }}
      >
        <Ionicons name="arrow-back-circle-outline" size={24} color="black" />
      </Pressable>
      <View style={styles.body}>
        <DefaultText style={styles.title}>{category.name}</DefaultText>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          contentOffset={{ x: 0, y: 0 }}
        >
          <View>
            {category.repairs.map((repair, index) => (
              <View style={{ flex: 1 }} key={index}>
                <RepairCard
                  repair={repair}
                  currCategory={category}
                  updateCatTotal={updateCatTotal}
                />
              </View>
            ))}
          </View>
          <DefaultText>Images: </DefaultText>
          <PagerView style={styles.viewPager} initialPage={0}>
            {images[0] ? (
              images.map((image, index) => (
                <View key={index} style={styles.page}>
                  <Image
                    source={{ uri: image.base64 }}
                    style={{ width: 200, height: 200 }}
                  />
                </View>
              ))
            ) : (
              <DefaultText style={{ textAlign: "center" }}>
                No Images Added
              </DefaultText>
            )}
          </PagerView>
        </ScrollView>
      </View>

      <View style={{ flex: 1 }}>
        <View style={styles.footer}>
          <DefaultText>Comments: </DefaultText>
          <TextInput
            value={comments}
            onChangeText={setComments}
            style={styles.commentInput}
          />
        </View>

        <View style={styles.footer}>
          <DefaultText style={styles.footerText}>
            Total Cost: ${catCost.toFixed(2)}
          </DefaultText>
          <Pressable
            style={({ pressed }) => (pressed ? [styles.pressedItem] : [])}
            onPress={takePicture}
          >
            <Entypo
              name="camera"
              size={24}
              color={Colors.green}
              style={styles.icon}
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ViewCategory;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    marginHorizontal: 20,
  },
  body: {
    height: "85%",
    // paddingBottom: 10,
  },
  title: {
    color: Colors.green,
    fontSize: 25,
  },
  contentContainer: {
    justifyContent: "center",
    paddingBottom: 100,
  },
  viewPager: {
    width: "100%",
    paddingBottom: "20%",
  },
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentInput: {
    backgroundColor: "#7b858c4e",
    borderRadius: 8,
    fontSize: 12,
    width: 200,
  },
  footerText: {
    fontSize: 20,
  },
  icon: {
    padding: 15,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
