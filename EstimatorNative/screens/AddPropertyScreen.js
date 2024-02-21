import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Switch,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";

import { getFormattedDate } from "../util/date";
import DefaultText from "../components/ui/DefaultText";
import PropertyInput from "../components/ui/PropertyInput";
import DefaultButton from "../components/ui/DefaultButton";
import Property from "../models/property";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function AddProperty({ navigation, route }) {
  const placeholderImg =
    "https://github.com/ellievmurphy/repair_estimator/blob/development/EstimatorNative/assets/images/placeholder.png?raw=true";

  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [vacant, setVacancy] = useState("");
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [sqft, setSqft] = useState("");
  const date = new Date();

  const [image, setImage] = useState(null);
  const [takenImage, setTakenImage] = useState(placeholderImg);
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

  // async function getPropertyImage(uri) {
  //   // console.log(uri);
  //   await fetchImageData(uri).then((data) => setImage(data));
  //   return image;
  // }

  // const fetchImageData = async (uri) => {
  //   // console.log(uri);
  //   // fetch Base64 string of image data
  //   if (uri) {
  //     try {
  //       const data = await FileSystem.readAsStringAsync(uri, {
  //         encoding: FileSystem.EncodingType.Base64,
  //       });
  //       const base64 = "data:image/png;base64, " + data;
  //       // console.log(base64);
  //       return base64;
  //     } catch (error) {
  //       // Handle error
  //       console.error("Error reading file:", error);
  //       throw error; // You might want to rethrow or handle the error appropriately
  //     }
  //   }
  // };

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

  useEffect(() => {
    if (takenImage) {
      setImage("data:image/png;base64, " + takenImage[0].base64);
    }
  }, [takenImage]);

  // useEffect(() => {
  //   (async () => {
  //     MediaLibrary.requestPermissionsAsync();
  //     const cameraStatus = await Camera.requestCameraPermissionsAsync();
  //     setCameraHasPermission(cameraStatus);
  //   })();
  // }, []);

  // // Updates whenever an image is saved from CameraScreen
  // useEffect(() => {
  //   if (route.params?.propImage) {
  //     // console.log("new image: " + route.params?.propImage);
  //     let imgData = getPropertyImage(route.params?.propImage);
  //     setImage(imgData);
  //     // console.log("new image: " + image);
  //   }
  // }, [route.params?.propImage]);

  function handleStart() {
    const numZip = parseInt(zip);
    const numBeds = parseInt(beds);
    const numBaths = parseInt(baths);
    const numSqft = parseInt(sqft);

    if (
      !isNaN(numZip) &&
      !isNaN(numBeds) &&
      !isNaN(numBaths) &&
      !isNaN(numSqft)
    ) {
      const newProperty = new Property(
        streetAddress,
        city,
        numZip,
        vacant,
        image,
        numBeds,
        numBaths,
        numSqft,
        getFormattedDate(date),
        "Ellie Murphy",
        0.0,
        null
      );
      navigation.navigate("ListCategories", { property: newProperty });
      // console.log(newProperty);
    }
  }

  let imagePreview = (
    <DefaultText style={styles.previewText}>No image taken yet</DefaultText>
  );

  if (takenImage !== placeholderImg) {
    imagePreview = (
      <Image source={{ uri: takenImage[0].uri }} style={styles.imageStyle} />
    );
  }

  // green: #5A6D5D
  // light grey: #F5F5F4
  // dark grey: #7B858C
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen}>
        <View style={styles.container}>
          <Title>New Estimate</Title>
          {/* Address input */}
          <PropertyInput
            title={"Street Address"}
            keyboard={"default"}
            target={streetAddress}
            targetFunction={setStreetAddress}
          />
          <PropertyInput
            title={"City"}
            keyboard={"default"}
            target={city}
            targetFunction={setCity}
          />
          <PropertyInput
            title={"Zip"}
            keyboard={"decimal-pad"}
            target={zip}
            targetFunction={setZip}
          />
          {/* Vacancy and date of inspection */}
          <View style={styles.bbContainer}>
            <DefaultText>Vacant?</DefaultText>
            <Switch
              trackColor={{ false: "#5A6D5Dc82", true: Colors.green }}
              thumbColor={vacant ? Colors.light_grey : Colors.light_grey}
              onValueChange={setVacancy}
              value={vacant}
            />
            <DefaultText style={{ marginHorizontal: 10 }}>Date</DefaultText>
            <View style={styles.dateContainer}>
              <DefaultText>{getFormattedDate(date)}</DefaultText>
            </View>
          </View>
          {/* Contains numerical inputs (bed, baths, sqft) */}
          <PropertyInput
            title={"Sq. Ft."}
            keyboard={"decimal-pad"}
            target={sqft}
            targetFunction={setSqft}
          />
          <View style={styles.bbContainer}>
            <View style={[styles.bContainer, { marginRight: 15 }]}>
              <PropertyInput
                title={"Beds"}
                keyboard={"decimal-pad"}
                target={beds}
                targetFunction={setBeds}
              />
            </View>
            <View style={styles.bContainer}>
              <PropertyInput
                title={"Baths"}
                keyboard={"decimal-pad"}
                target={baths}
                targetFunction={setBaths}
              />
            </View>
          </View>
          <DefaultText>Property Type</DefaultText>
          <DefaultText>Insert dropdown</DefaultText>
          {/* Take Photo and Start Estimate buttons */}
          <View style={styles.buttonContainer}>
            <DefaultButton
              style={{
                borderColor: Colors.green,
                backgroundColor: Colors.green,
              }}
              text={"Take Photo"}
              pressHandler={takePicture}
            />
            <Pressable
              style={({ pressed }) =>
                pressed
                  ? [styles.pressedItem, styles.startButtonContainer]
                  : styles.startButtonContainer
              }
              onPress={handleStart}
            >
              <View>
                <DefaultText style={[styles.text, styles.button]}>
                  Start Estimate
                </DefaultText>
              </View>
            </Pressable>
          </View>
          <View style={styles.imagepreviewcontainer}>{imagePreview}</View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default AddProperty;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  bbContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  bContainer: {
    width: "25%",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  startButtonContainer: {
    paddingHorizontal: 20,
  },
  button: {
    color: Colors.dark_grey,
    fontSize: 20,
  },
  pressedItem: {
    backgroundColor: "#e9e9e78d",
  },
  dateContainer: {
    backgroundColor: "#7b858c30",
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  imagepreviewcontainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 200,
    backgroundColor: "#f0cced",
    marginVertical: 8,
    borderRadius: 8,
  },
  previewText: {
    color: "#592454",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
});
