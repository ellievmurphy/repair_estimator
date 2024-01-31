import { StyleSheet, Text, View, Pressable } from "react-native";

import DefaultText from "./components/DefaultText";
import IntroductoryScreen from "./screens/IntroductoryScreen";
import AddPropertyScreen from "./screens/AddPropertyScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  // green: #5A6D5D
  // light grey: #F5F5F4
  // dark grey: #7B858C

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Introductory"
        screenOptions={{ headerTransparent: true }}
      >
        <Stack.Screen name="Introductory" component={IntroductoryScreen} options={{headerShown: false}}/>
        <Stack.Screen name="NewProperty" component={AddPropertyScreen} options={{title: ""}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
