import { useState, useEffect } from "react";
import { Pressable, StyleSheet, View } from "react-native";

import DefaultText from "../ui/DefaultText";
import RepairInfo from "./RepairInfo";

function RepairCard({ repair, currCategory, updateCatTotal }) {
  const [showInfo, setShowInfo] = useState(true);
  const [total, setTotal] = useState(repair.total);
  const [oldTotal, setOldTotal] = useState(0.0);

  // Represents RepairInfo.updateTotal()
  function handleUpdateTotal(quantity) {
    setOldTotal(total);
    setTotal(quantity);
  }

  useEffect(() => {
    // repair.total = total;
    updateCatTotal(total, oldTotal);
  }, [total, oldTotal]);

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

        <RepairInfo
          repair={repair}
          show={showInfo}
          updateTotal={handleUpdateTotal}
          repTotal={total}
        />
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
