import { useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  FlatList,
} from "react-native";

import DefaultText from "../components/ui/DefaultText";
import { EXTERIOR, INTERIOR, MECHANICALS, OTHER } from "../data/category-data";
import Colors from "../constants/colors";
import ListItem from "../components/ui/ListItem";
import CategoryCard from "../components/util/CategoryCard";
import Property from "../models/property";
import { useProperty } from "../lib/properties/properties-queries";

function ListCategoriesScreen({ navigation }) {
  const { data: properties, error: propertyError } = useProperty();
  console.log("properties", properties);
  const propertyData = properties[0] ? properties[0].values : {totalCost: 1};

  const [totalCost, setTotalCost] = useState(propertyData.totalCost);

  useEffect(() => {
    setTotalCost(propertyData.totalCost);
  }, [propertyData, setTotalCost]);

  return (
    <SafeAreaView style={styles.screen}>
      <DefaultText style={styles.bodyText}>
        Select Category | Total: ${totalCost.toFixed(2)}
      </DefaultText>
      <View style={styles.listContainer}>
        {/* <SectionList
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
                      category: propertyCtx.property.repairs.filter(
                        (category) => category.id === item.id
                      )[0],
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
                <DefaultText style={styles.sectionTitle}>{type}</DefaultText>
              </View>
            );
          }}
          stickySectionHeadersEnabled
        /> */}
        <FlatList
          data={[...EXTERIOR, ...INTERIOR, ...MECHANICALS, ...OTHER]}
          renderItem={({ item }) => (
            <View style={{ flex: 1 }}>
              <CategoryCard catType={item} />
            </View>
          )}
        />
      </View>
      <View>
        <Pressable
          onPress={() => {
            navigation.navigate("GenerateReport", {
              property: propertyData,
            });
          }}
        >
          <DefaultText style={[styles.bodyText, { color: Colors.green }]}>
            Generate Report
          </DefaultText>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default ListCategoriesScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: StatusBar.currentHeight + 50, // may have an issue here with the status bar
    marginHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 20,
    paddingLeft: 10,
  },
  contentContainer: {
    justifyContent: "center",
    paddingBottom: 100,
  },
  bodyText: {
    fontSize: deviceWidth > 380 ? 16 : 12,
  },
  listContainer: {
    flex: 1,
    marginVertical: 15,
  },
});
