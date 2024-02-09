import { useState } from "react";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import DefaultText from "../ui/DefaultText";

import Colors from "../../constants/colors";
import RepairCard from "./RepairCard";

function ViewCategory({ route }) {
  const category = route.params.category;

  return (
    <View style={styles.rootContainer}>
      <DefaultText style={styles.title}>{category.name}</DefaultText>
      <FlatList
        data={category.repairs}
        keyExtractor={(item, index) => item.categoryId + index}
        renderItem={(itemData) => {
          return <RepairCard repair={itemData.item} />;
        }}
      />
      <View>
        <DefaultText style={styles.footer}>
          Total Cost: ${category.total}
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
