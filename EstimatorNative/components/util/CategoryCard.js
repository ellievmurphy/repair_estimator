import { useState } from "react";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ListItem from "../ui/ListItem";
import DefaultText from "../ui/DefaultText";
import Colors from "../../constants/colors";
import { createCategoryQueryOptions } from "../../lib/categories/categories-queries";

function CategoryCard({ catType, property }) {
  const navigation = useNavigation();
  const [showInfo, setShowInfo] = useState(false);

  const categoryQuery = createCategoryQueryOptions("");

  function updateShowing() {
    setShowInfo(!showInfo);
  }

  return (
    <View style={styles.rootContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={updateShowing}
      >
        <DefaultText style={styles.text}>{catType.type}</DefaultText>

        {showInfo && (
          <View style={{ flex: 1 }}>
            <FlatList
              data={catType.data}
              renderItem={({ item }) => (
                <ListItem
                  category={item}
                  onPress={async () => {
                    // TODO: need to create a query to get a singular category given its
                    const category = await categoryQuery.queryFn();
                    navigation.navigate("ViewCategory", {
                      category: propertyCtx.property.repairs.filter(
                        (category) => category.id === item.id
                      )[0],
                      categoryId: item.id,
                      property: property,
                    });
                  }}
                />
              )}
            />
          </View>
        )}
      </Pressable>
    </View>
  );
}

export default CategoryCard;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    backgroundColor: "#b1bbb3ff",
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  underline: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
