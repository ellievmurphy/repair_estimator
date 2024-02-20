import { Pressable, StyleSheet, View } from "react-native";
import DefaultText from "./DefaultText";

function ListItem({ category, onPress }) {
  return (
    <View style={styles.rootContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <DefaultText>{category.name}</DefaultText>
      </Pressable>
    </View>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  rootContainer: {
    paddingLeft: 10,
    paddingVertical: 2,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
