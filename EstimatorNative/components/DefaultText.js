import {
  useFonts,
  InknutAntiqua_400Regular,
} from "@expo-google-fonts/inknut-antiqua";
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DefaultText = ({ children, style }) => {
  let [fontsLoaded] = useFonts({
    InknutAntiqua_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'InknutAntiqua_400Regular', // Set your default font family here
  },
});

export default DefaultText;