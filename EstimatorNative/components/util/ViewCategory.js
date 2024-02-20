import { useState } from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  View,
  TextInput,
  Image,
} from "react-native";
import DefaultText from "../ui/DefaultText";
import { KeyboardAwareFlatList } from "react-native-keyboard-aware-scroll-view";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import PagerView from "react-native-pager-view";

import Colors from "../../constants/colors";
import RepairCard from "./RepairCard";

function ViewCategory({ route }) {
  const navigation = useNavigation();
  const category = route.params.category;
  const [catCost, setCatCost] = useState(0.0);
  const [comments, setComments] = useState("");

  // Passed to and called by RepairCard as RepairCard.updateCatTotal()
  function updateCatTotal(newTotal, oldTotal) {
    // console.log("sanity: $" + newTotal);
    category.cost += newTotal - oldTotal;

    setCatCost(catCost + newTotal - oldTotal);
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.body}>
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

        <DefaultText>Images: </DefaultText>
        <PagerView style={styles.viewPager} initialPage={0}>
          <View style={styles.page} key="1">
            <DefaultText>No Images Added</DefaultText>
          </View>
          <View style={styles.page} key="2">
            <Image
              source={{
                uri: "https://github.com/ellievmurphy/repair_estimator/blob/development/EstimatorNative/assets/images/placeholder.png?raw=true",
              }}
              style={{ width: 200, height: 200 }}
            />
          </View>
          <View style={styles.page} key="3">
            <Image
              source={{
                uri: "https://github.com/ellievmurphy/repair_estimator/blob/development/EstimatorNative/assets/images/placeholder.png?raw=true",
              }}
              style={{ width: 200, height: 200 }}
            />
          </View>
        </PagerView>
      </View>

      <View style={{ flex: 1 }}>
        <View style={styles.footer}>
          <DefaultText>Comments: </DefaultText>
          <TextInput
            value={comments}
            onChangeText={setComments}
            style={styles.commentInput}
          />
        </View>
        <View style={styles.footer}>
          <DefaultText style={styles.footerText}>
            Total Cost: ${catCost.toFixed(2)}
          </DefaultText>
          <Pressable
            style={({ pressed }) => (pressed ? [styles.pressedItem] : [])}
            onPress={() => navigation.navigate("RepairCamera")}
          >
            <Entypo
              name="camera"
              size={24}
              color={Colors.green}
              style={styles.icon}
            />
          </Pressable>
        </View>
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
  body: {
    flex: 6,
    paddingBottom: 10,
  },
  title: {
    color: Colors.green,
    fontSize: 25,
  },
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  commentInput: {
    backgroundColor: "#7b858c4e",
    borderRadius: 8,
    fontSize: 12,
    width: 200,
  },
  footerText: {
    flex: 2,
    fontSize: 20,
  },
  icon: {
    padding: 15,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
