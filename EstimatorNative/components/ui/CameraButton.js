import { Pressable, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

function CameraButton({color, icon, onPress, title}) {
  return <Pressable onPress={onPress} style={styles.button}>
    <Entypo name={icon} size={28} color={color ? color : "#f1f1f1"} />
    <Text style={styles.text}>{title}</Text>
  </Pressable>;
}

export default CameraButton;

const styles = StyleSheet.create({
  button: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize:  16,
    color: "#f1f1f1",
    marginLeft: 10
  }
});
