import React from "react";
import { StyleSheet } from "react-native";
import AppText from "./AppText";

export default function AppSubtitle({ children }) {
  return <AppText style={styles.subtitle}>{children}</AppText>;
}

const styles = StyleSheet.create({
  subtitle: {
    color: "gray",
  },
});
