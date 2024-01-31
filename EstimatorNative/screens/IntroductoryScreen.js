import { View, Pressable, StyleSheet, Text } from "react-native";

import DefaultText from "../components/DefaultText";
import DefaultButton from "../components/DefaultButton";

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
        style={{ borderColor: "#7B858C", backgroundColor: "#7B858C" }}
        text={"Create New"}
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
    color: "#5A6D5D",
  },
});
