import {
  FlatList,
  Pressable,
  SectionList,
  StyleSheet,
  View,
} from "react-native";

import DefaultText from "../components/ui/DefaultText";
import DefaultButton from "../components/ui/DefaultButton";
import { CATEGORIES, EXTERIOR } from "../data/category-data";
import Colors from "../constants/colors";
import ViewCategory from "../components/util/ViewCategory";
import ListItem from "../components/ui/ListItem";

function ListCategoriesScreen({ navigation, route }) {
  const property = route.params.property;

  // Render function for each item in the section
  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <DefaultText>{item}</DefaultText>
    </View>
  );

  // Render function for section headers
  const renderSectionHeader = ({ section: { title } }) => (
    <View style={{ padding: 10, backgroundColor: "lightgray" }}>
      <DefaultText>{title}</DefaultText>
    </View>
  );

  function pressCategory({ category }) {
    navigation.navigate("ViewCategory", { category: category });
  }

  return (
    <View style={styles.screen}>
      <DefaultText>
        Select Category | Total: ${property.totalCost.toFixed(2)}
      </DefaultText>
      <View style={styles.listContainer}>
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => {
            return (
              <View>
                <ListItem
                  category={itemData.item}
                  onPress={() => {
                    navigation.navigate("ViewCategory", {
                      category: itemData.item,
                    });
                  }}
                />
              </View>
            );
          }}
        />
      </View>
      <View>
        <Pressable>
          <DefaultText style={{ color: Colors.green }}>
            Generate Report
          </DefaultText>
        </Pressable>
      </View>
    </View>
  );
}

export default ListCategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 75,
    marginHorizontal: 15,
  },
  listContainer: {
    flex: 1,
    marginVertical: 15,
  },
});
