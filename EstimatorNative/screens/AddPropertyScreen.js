import { useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Switch,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import { getFormattedDate } from "../util/date";
import DefaultText from "../components/ui/DefaultText";
import PropertyInput from "../components/ui/PropertyInput";
import DefaultButton from "../components/ui/DefaultButton";
import Property from "../models/property";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function AddProperty({ navigation }) {
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [vacant, setVacancy] = useState("");
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [sqft, setSqft] = useState("");

  const date = new Date();

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
        null,
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

  function takePicture() {
    navigation.navigate("Camera");
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
});
