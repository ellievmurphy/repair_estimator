import {
  FlatList,
  Pressable,
  SectionList,
  StyleSheet,
  View,
  Image,
} from "react-native";

import DefaultText from "../components/ui/DefaultText";
import { CATEGORIES, EXTERIOR, INTERIOR } from "../data/category-data";
import Colors from "../constants/colors";
import ListItem from "../components/ui/ListItem";

function ListCategoriesScreen({ navigation, route }) {
  const property = route.params.property;

  return (
    <View style={styles.screen}>
      <DefaultText>
        Select Category | Total: ${property.totalCost.toFixed(2)}
      </DefaultText>
      <View style={styles.listContainer}>
        {/* <FlatList
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
        /> */}
        <SectionList
          sections={[...EXTERIOR, ...INTERIOR]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            // console.log(item)
            return (
              <View>
                <ListItem
                  category={item}
                  onPress={() => {
                    navigation.navigate("ViewCategory", {
                      category: item,
                    });
                  }}
                />
              </View>
            );
          }}
          renderSectionHeader={({ section: { type } }) => {
            return (
              <View style={{ backgroundColor: "#b1bbb3ff", borderRadius: 10 }}>
                <DefaultText style={{ fontSize: 20, paddingLeft: 10 }}>
                  {type}
                </DefaultText>
              </View>
            );
          }}
          stickySectionHeadersEnabled
        />
      </View>
      <View>
        <Pressable
          onPress={() => {
            navigation.navigate("GenerateReport", { property: property });
          }}
        >
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
