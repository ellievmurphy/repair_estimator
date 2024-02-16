import { useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import DefaultText from "../ui/DefaultText";
import { KeyboardAwareFlatList } from "react-native-keyboard-aware-scroll-view";

import Colors from "../../constants/colors";
import RepairCard from "./RepairCard";

function ViewCategory({ route }) {
  const category = route.params.category;
  const [catCost, setCatCost] = useState(0.0);

  // Passed to and called by RepairCard as RepairCard.updateCatTotal()
  function updateCatTotal(newTotal, oldTotal) {
    // console.log("sanity: $" + newTotal);
    category.cost += newTotal - oldTotal;

    setCatCost(catCost + newTotal - oldTotal);
  }

  return (
    <View style={styles.rootContainer}>
      <DefaultText style={styles.title}>{category.name}</DefaultText>
      <KeyboardAwareFlatList
        data={category.repairs}
        keyExtractor={(item, index) => item.categoryId + index}
        renderItem={(itemData) => {
          return (
            <RepairCard
              repair={itemData.item}
              currCategory={category}
              updateCatTotal={updateCatTotal}
            />
          );
        }}
      />
      <View>
        <DefaultText style={styles.footer}>
          Total Cost: ${catCost.toFixed(2)}
        </DefaultText>
      </View>
    </View>
  );
}

export default ViewCategory;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 75,

    marginHorizontal: 20,
  },
  title: {
    color: Colors.green,
    fontSize: 25,
  },
  footer: {
    fontSize: 20,
  },
});
