import { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Switch,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
  ActionSheetIOS,
  Dimensions,
} from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";

import { getFormattedDate } from "../util/date";
import DefaultText from "../components/ui/DefaultText";
import PropertyInput from "../components/ui/PropertyInput";
import DefaultButton from "../components/ui/DefaultButton";
import Property from "../models/property";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import {
  CATEGORIES,
  EXTERIOR,
  INTERIOR,
  MECHANICALS,
  OTHER,
} from "../data/category-data";
import { PropertyContext } from "../store/context/property-context";

function AddProperty({ navigation, route }) {
  const propertyCtx = useContext(PropertyContext);

  const placeholderImg = "../assets/images/placeholder.png";

  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [vacant, setVacancy] = useState("");
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [sqft, setSqft] = useState("");
  const date = new Date();
  const [selectedType, setSelectedType] = useState("Single Family");
  const propertyTypes = [
    "Single Family",
    "Condo/Townhouse",
    "Multi Family",
    "Commercial",
    "Cancel",
  ];
  const initRepairs = [...CATEGORIES];

  const [image, setImage] = useState(null);
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

  useEffect(() => {
    if (takenImage) {
      setImage("data:image/png;base64, " + takenImage[0].base64);
    }
  }, [takenImage]);

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
      // const newProperty = new Property(
      //   streetAddress,
      //   city,
      //   numZip,
      //   vacant,
      //   image,
      //   numBeds,
      //   numBaths,
      //   numSqft,
      //   getFormattedDate(date),
      //   selectedType,
      //   "Brooks O'Hearn",
      //   0.0,
      //   initRepairs
      // );
      // console.log(newProperty.repairs);
      propertyCtx.updateProperty(
        streetAddress,
        city,
        numZip,
        vacant,
        image,
        numBeds,
        numBaths,
        numSqft,
        getFormattedDate(date),
        selectedType,
        "Brooks O'Hearn",
        0.0,
        initRepairs
      );
      // console.log(propertyCtx.property);
      navigation.navigate("ListCategories");
    }
  }

  // green: #5A6D5D
  // light grey: #F5F5F4
  // dark grey: #7B858C
  return (
    <KeyboardAvoidingView style={styles.screen} behavior="padding">
      <ScrollView style={styles.screen}>
        <View style={styles.container}>
          <Title>New Estimate</Title>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <DefaultText style={styles.text}>Property Type:</DefaultText>
            {Platform.OS === "android" && (
              <Picker
                style={{ flex: 1 }}
                itemStyle={{ flex: 1, color: "black" }}
                selectedValue={selectedType}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedType(itemValue)
                }
              >
                <Picker.Item label="Single Family" value="Single Family" />
                <Picker.Item label="Condo/Townhouse" value="Condo/Townhouse" />
                <Picker.Item label="Multi Family" value="Multi Family" />
                <Picker.Item label="Commercial" value="Commercial" />
              </Picker>
            )}
            {Platform.OS === "ios" && (
              <View>
                <DefaultButton
                  style={{
                    flex: 1,
                    marginLeft: 10,
                    backgroundColor: Colors.light_green,
                    borderWidth: 0,
                  }}
                  text={selectedType}
                  pressHandler={() => {
                    ActionSheetIOS.showActionSheetWithOptions(
                      {
                        options: propertyTypes,
                        cancelButtonIndex: 4,
                        userInterfaceStyle: "auto",
                      },
                      (buttonIndex) => {
                        if (buttonIndex === 4) {
                          // cancel action
                        } else {
                          switch (buttonIndex) {
                            case 0:
                              setSelectedType("Single Family");
                              break;
                            case 1:
                              setSelectedType("Condo/Townhouse");
                              break;
                            case 2:
                              setSelectedType("Multi Family");
                              break;
                            default:
                              setSelectedType("Commercial");
                              break;
                          }
                        }
                      }
                    );
                  }}
                />
              </View>
            )}
          </View>
          {/* Address input */}
          <PropertyInput
            title={"Street Address"}
            keyboard={"default"}
            target={streetAddress}
            targetFunction={setStreetAddress}
            autoCapitalize={"words"}
          />
          <PropertyInput
            title={"City"}
            keyboard={"default"}
            target={city}
            targetFunction={setCity}
            autoCapitalize={"words"}
          />
          <PropertyInput
            title={"Zip"}
            keyboard={"decimal-pad"}
            target={zip}
            targetFunction={setZip}
          />
          {/* Vacancy and date of inspection */}
          <View style={styles.bbContainer}>
            <DefaultText
              style={[styles.text, { paddingRight: deviceWidth > 380 ? 5 : 0 }]}
            >
              Vacant?
            </DefaultText>
            <Switch
              trackColor={{ false: "#5A6D5Dc82", true: Colors.green }}
              thumbColor={vacant ? Colors.light_grey : Colors.light_grey}
              onValueChange={setVacancy}
              value={vacant}
            />
            <DefaultText style={[styles.text, { marginHorizontal: 10 }]}>
              Date
            </DefaultText>
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
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default AddProperty;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingLeft: deviceWidth > 380 ? 5 : 0,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: deviceWidth > 380 ? 16 : 12,
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
    marginTop: deviceWidth > 380 ? 30 : 10,
  },
  startButtonContainer: {
    marginLeft: deviceWidth > 380 ? 15 : 0,
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
});
