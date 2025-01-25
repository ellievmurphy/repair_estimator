import { StyleSheet, Text, View, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as ReactQuery from "@tanstack/react-query";
import Entypo from "@expo/vector-icons/Entypo";

import ListCategoriesScreen from "./screens/ListCategoriesScreen";
import IntroductoryScreen from "./screens/IntroductoryScreen";
import AddPropertyScreen from "./screens/AddPropertyScreen";
import Colors from "./constants/colors";
import ViewCategory from "./components/util/ViewCategory";
import CameraScreen from "./screens/CameraScreen";
import GenerateReportScreen from "./screens/GenerateReportScreen";
import RepairCameraScreen from "./screens/RepairCameraScreen";

const Stack = createNativeStackNavigator();
const queryClient = new ReactQuery.QueryClient();

export default function App() {
  // green: #5A6D5D
  // light grey: #F5F5F4
  // dark grey: #7B858C

  return (
    <ReactQuery.QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Introductory"
          screenOptions={{ headerTransparent: true }}
        >
          <Stack.Screen
            name="Introductory"
            component={IntroductoryScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewProperty"
            component={AddPropertyScreen}
            options={{
              title: "",
            }}
          />
          <Stack.Screen
            name="ListCategories"
            component={ListCategoriesScreen}
            options={styles.invisibleHeader}
          />
          <Stack.Screen
            name="ViewCategory"
            component={ViewCategory}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="GenerateReport"
            component={GenerateReportScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ReactQuery.QueryClientProvider>
  );
}

export function RightHeader() {
  return <Entypo name="dots-three-vertical" size={20} color="black" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  invisibleHeader: {
    title: "",
    headerStyle: { backgroundColor: "#F5F5F4" },
    headerShadowVisible: false,
  },
});
