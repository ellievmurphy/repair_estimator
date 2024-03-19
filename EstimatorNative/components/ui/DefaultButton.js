import { StyleSheet, Pressable, View } from "react-native";

import DefaultText from "./DefaultText";

function DefaultButton({pressHandler, style, text}) {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed
          ? [styles.pressedItem, styles.buttonContainer, style]
          : [styles.buttonContainer, style]
      }
      onPress={pressHandler}
      // android_ripple={{ color: "black" }}
    >
      <View>
        <DefaultText style={[styles.text, styles.button]}>
          {text}
        </DefaultText>
      </View>
    </Pressable>
  );
}

export default DefaultButton;

const styles = StyleSheet.create({

  buttonContainer: {
    color: "#F5F5F4",
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: "#5c5c5c",
    shadowOpacity: 0.25,
    shadowRadius: 7,
    shadowOffset: { width: 3, height: 10 },
    elevation: 8,
  },
  button: {
    color: "#F5F5F4",
    fontSize: 20,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
