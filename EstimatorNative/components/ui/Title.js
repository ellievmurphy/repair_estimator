import { StyleSheet, View } from "react-native";

import DefaultText from "./DefaultText";
import Colors from "../../constants/colors";

function Title({ children }) {
  return <View style={styles.titleContainer}>
    <DefaultText style={styles.title}>{children}</DefaultText>
  </View>;
}

export default Title;

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: "20%",
  },
  title: {
    fontSize: 40,
    color: Colors.green,
    textAlign: "left",
  },
});
