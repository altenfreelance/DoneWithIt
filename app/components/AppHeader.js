import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

export default function AppHeader({ children, style }) {
  return <Text style={[styles.header, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
