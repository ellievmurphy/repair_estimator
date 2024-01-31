import { View, TextInput, StyleSheet } from "react-native";

import DefaultText from "./DefaultText";

function PropertyInput({ title, keyboard, target, targetFunction }) {
  return (
    <View>
      <DefaultText>{title}</DefaultText>
      <TextInput
        placeholder={title}
        keyboardType={keyboard}
        value={target}
        onChangeText={targetFunction}
        style={styles.input}
      />
    </View>
  );
}

export default PropertyInput;

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 12,
    padding: 5,
    maxWidth: "85%",
  },
});
