import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import Constants from "expo-constants";

export default function SafeScreen({ children, backgroundColor = "white" }) {
  return (
    <SafeAreaView
      style={[styles.screenContainer, { backgroundColor: backgroundColor }]}
    >
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
