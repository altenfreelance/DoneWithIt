import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import Constants from "expo-constants";

export default function Safecreen(props) {
  return (
    <SafeAreaView style={styles.screenContainer}>{props.children}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
