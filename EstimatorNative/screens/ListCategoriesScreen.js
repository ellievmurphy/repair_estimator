import {
  FlatList,
  Pressable,
  SectionList,
  StyleSheet,
  View,
  Image,
  Platform
} from "react-native";

import DefaultText from "../components/ui/DefaultText";
import DefaultButton from "../components/ui/DefaultButton";
import { CATEGORIES, EXTERIOR } from "../data/category-data";
import Colors from "../constants/colors";
import ViewCategory from "../components/util/ViewCategory";
import ListItem from "../components/ui/ListItem";
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { Asset } from "expo-asset";
import * as ImageManipulator from "expo-image-manipulator";


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

  function exportReport() {

    // const copyFromAssets = async (asset) => {
    //   try {
    //     await Asset.loadAsync(asset);
    //     const { localUri } = Asset.fromModule(asset);
    
    //     return localUri;
    //   } catch (error) {
    //     console.log(error);
    //     throw err;
    //   }
    // };
    
    
    // const processLocalImageIOS = async (imageUri) => {
    //   try {
    //     const uriParts = imageUri.split(".");
    //     const formatPart = uriParts[uriParts.length - 1];
    //     let format;
    
    //     if (formatPart.includes("png")) {
    //       format = "png";
    //     } else if (formatPart.includes("jpg") || formatPart.includes("jpeg")) {
    //       format = "jpeg";
    //     }
    
    //     const { base64 } = await ImageManipulator.manipulateAsync(
    //       imageUri,
    //       [],
    //       { format: format || "png", base64: true }
    //     );
    
    //     return `data:image/${format};base64,${base64}`;
    //   } catch (error) {
    //     console.log(error);
    //     throw error
    //   }
    // };
    
    // const logo = async () => {
    //     try {
    //         const asset = require('./Users/nrcase/estimator/repair_estimator/EstimatorNative/assets/Shamrock-Homes-logo.png');
    //         let src = await copyFromAssets(asset);
    //         if(Platform.OS === 'ios') {
    //             src = await processLocalImageIOS(src);
    //         }
    
    //         return `<img src="${src}" alt="Logo" />`
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    let headerAndStyles = `
    <html>
    <head>
      <title>Estimator Report</title>
      <style>
      @page {
        size: letter;
        margin: .5in;
    }
    
    @media print {
        table.paging thead td, table.paging tfoot td {
            height: .5in;
        }
    }
    
    header, footer {
        width: 100%; height: .5in;
    }
    
    header {
        position: absolute;
        top: 0;
    }
    
    @media print {
        header, footer {
            position: fixed;
        }
        
        footer {
            bottom: 0;
        }
    }
      </style>
    `

    let bodyContent = `
    <body>
    <header>` + property.streetAddress + `</header>

    <table class=paging><thead><tr><td>&nbsp;</td></tr></thead><tbody><tr><td>

    (content goes here)

    </td></tr></tbody><tfoot><tr><td>&nbsp;</td></tr></tfoot></table>

    <footer>(repeated footer)</footer>

    </body>
    </html>
`;
    let htmlContent = headerAndStyles + bodyContent;

        const fileName = "RE_" + property.streetAddress + ".pdf";  //this doesnt work
        Print.printToFileAsync({ html: htmlContent }).then((result) => {
          if (result.uri) {
            Sharing.shareAsync(result.uri);
          } else {
            console.log("No file to share");
          }
        });
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
        <Pressable onPress={exportReport}>
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
