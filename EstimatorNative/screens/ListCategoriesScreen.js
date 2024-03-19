import { useContext, useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  SectionList,
  StyleSheet,
  View,
  Image,
} from "react-native";

import DefaultText from "../components/ui/DefaultText";
import {
  CATEGORIES,
  EXTERIOR,
  INTERIOR,
  MECHANICALS,
  OTHER,
} from "../data/category-data";
import Colors from "../constants/colors";
import ListItem from "../components/ui/ListItem";
import { PropertyContext } from "../store/context/property-context";

function ListCategoriesScreen({ navigation }) {
  // const property = route.params.property;
  const propertyCtx = useContext(PropertyContext);

  // const [totalCost, setTotalCost] = useState(propertyCtx.property.totalCost);

  // useEffect(() => {
  //   if (propertyCtx) {
  //     console.log(propertyCtx)
  //     setTotalCost(propertyCtx.totalCost);
  //   }
  // }, [propertyCtx, setTotalCost]);

  return (
    <View style={styles.screen}>
      <DefaultText>
        Select Category | Total: ${propertyCtx.property.totalCost.toFixed(2)}
      </DefaultText>
      <View style={styles.listContainer}>
        <SectionList
          sections={[...EXTERIOR, ...INTERIOR, ...MECHANICALS, ...OTHER]}
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
                      categoryId: item.id,
                      property: propertyCtx.property,
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
            navigation.navigate("GenerateReport", { property: propertyCtx.property });
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
