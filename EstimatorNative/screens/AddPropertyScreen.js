import { useState } from "react";
import { View, StyleSheet, Pressable, Switch } from "react-native";

import { getFormattedDate } from "../util/date";
import DefaultText from "../components/DefaultText";
import PropertyInput from "../components/PropertyInput";
import DefaultButton from "../components/DefaultButton";
import Property from "../models/property";

function AddProperty() {
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

    if(!isNaN(numZip) && !isNaN(numBeds) && !isNaN(numBaths) && !isNaN(numSqft)) {
      const newProperty = new Property(streetAddress, city, numZip, vacant, null, numBeds, numBaths, numSqft, date);
      // console.log(newProperty);
    }
  }

  // green: #5A6D5D
  // light grey: #F5F5F4
  // dark grey: #7B858C
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <DefaultText style={styles.title}>New Estimate</DefaultText>
      </View>

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
          trackColor={{ false: "#5a6d5d82", true: "#5A6D5D" }}
          thumbColor={vacant ? "#f4f3f4" : "#f4f3f4"}
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
          style={{ borderColor: "#5A6D5D", backgroundColor: "#5A6D5D" }}
          text={"Take Photo"}
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
  );
}

export default AddProperty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  titleContainer: {
    marginTop: 75,
  },
  title: {
    fontSize: 40,
    color: "#5A6D5D",
    textAlign: "left",
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
    color: "#7B858C",
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
