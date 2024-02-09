import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

import DefaultText from "../ui/DefaultText";
import RepairInfo from "./RepairInfo";

function RepairCard({ repair }) {
  const [showInfo, setShowInfo] = useState(true);

  function updateShowing() {
    setShowInfo(!showInfo);
  }

  return (
    <View style={styles.rootContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={updateShowing}
      >
        <DefaultText style={styles.text}>{repair.name}</DefaultText>

        <View style={styles.underline} />
        
        <RepairInfo repair={repair} show={showInfo} />
      </Pressable>
    </View>
  );
}

export default RepairCard;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  underline: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
