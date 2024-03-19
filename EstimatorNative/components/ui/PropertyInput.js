import { View, TextInput, StyleSheet, Dimensions } from "react-native";

import DefaultText from "./DefaultText";

function PropertyInput({
  title,
  keyboard,
  target,
  targetFunction,
  autoCapitalize,
}) {
  return (
    <View>
      <DefaultText>{title}</DefaultText>
      <TextInput
        placeholder={title}
        keyboardType={keyboard}
        value={target}
        onChangeText={targetFunction}
        style={styles.input}
        autoCapitalize={autoCapitalize}
      />
    </View>
  );
}

export default PropertyInput;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderRadius: 8,
    borderWidth: 1,
    fontSize: deviceWidth > 380 ? 16 : 12,
    padding: deviceWidth > 380 ? 10 : 5,
    maxWidth: "85%",
  },
});
