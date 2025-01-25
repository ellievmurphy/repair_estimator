import { View, Pressable, StyleSheet, Text } from "react-native";

import DefaultText from "../components/ui/DefaultText";
import DefaultButton from "../components/ui/DefaultButton";
import Colors from "../constants/colors";
import { useProperty, usePropertyMutation } from "../lib/properties/properties-queries";
import Property from "../models/property";
import { resetDatabase } from "../lib/database/primary-database";

function IntroductoryScreen({ newEstimate, navigation }) {
  
  // Function that is called after "Create New" button is pressed
  // Should trigger the creation of a new property and transition app to the AddProperty component
  function createHandler(pressed) {
    navigation.navigate("NewProperty");
  }

  return (
    <View style={styles.container}>
      <DefaultText style={[styles.title]}>Estimator</DefaultText>
      <DefaultButton
        pressHandler={createHandler}
        style={{ borderColor: Colors.dark_grey, backgroundColor: Colors.dark_grey }}
        text={"Create New"}
      />
      <DefaultButton
        pressHandler={resetDatabase}
        style={{ margin: 10, borderColor: Colors.med_grey, backgroundColor: Colors.med_grey }}
        text={"Reset Database"}
      />
    </View>
  );
}

export default IntroductoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 48,
    color: Colors.green,
  },
});
