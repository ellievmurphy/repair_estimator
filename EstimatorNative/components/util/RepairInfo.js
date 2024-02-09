import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import Collapsible from "react-native-collapsible";
import DefaultText from "../ui/DefaultText";
import Colors from "../../constants/colors";

function RepairInfo({ repair, show }) {
  const [total, setTotal] = useState(0.0);
  const [quantity, setQuantity] = useState("");

  function handleChangeAmt(input) {
    const quantDouble = parseFloat(input);
    if (isNaN(quantDouble)) {
      return;
    }
    setQuantity(input);
    setTotal(quantDouble * repair.costPerUnit);
  }

  return (
    <Collapsible collapsed={show} style={styles.rootContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.unitContainer}>
          <DefaultText style={[styles.text, {marginRight: 10}]}>
            Per {repair.unit}: ${repair.costPerUnit.toFixed(2)}
          </DefaultText>
          <DefaultText style={styles.text}>Total: ${total.toFixed(2)}</DefaultText>
        </View>
        <View style={styles.unitContainer}>
          <DefaultText style={styles.text}>Quantity: </DefaultText>
          <TextInput
            value={quantity}
            placeholder="Quantity"
            onChangeText={handleChangeAmt}
          />
        </View>
      </View>
    </Collapsible>
  );
}

export default RepairInfo;

const styles = StyleSheet.create({
  rootContainer: {
  },
  cardContainer: {
    justifyContent: "center"
  },
  unitContainer: {
    flexDirection: "row",
  },
  text: {
    color: Colors.dark_grey
  }
});
