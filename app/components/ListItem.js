import React from "react";

import { View, StyleSheet, TouchableHighlight } from "react-native";

import colors from "../config/colors";
import AppSubtitle from "./AppSubtitle";
import AppHeader from "./AppHeader";

export default function ListItem({
  title,
  subtitle,
  style,
  iconComponent,
  size = 35,
  underlayColor = colors.nuetralLight,
  onPress = () => {
    console.log(`No onPress function was passed to ListItem ${title}`);
  },
}) {
  const styles = StyleSheet.create({
    container: { paddingVertical: 5 },
    subContainer: {
      height: size,
      flexDirection: "row",
      marginVertical: 15,
      marginHorizontal: 20,
      alignItems: "center",
    },
    titleContainer: {
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginVertical: 10,
      marginHorizontal: 20,
    },
  });

  return (
    <TouchableHighlight
      style={[styles.container, style]}
      onPress={onPress}
      underlayColor={underlayColor}
    >
      <View style={styles.subContainer}>
        {iconComponent}
        <View style={styles.titleContainer}>
          {title && <AppHeader>{title}</AppHeader>}
          {subtitle && <AppSubtitle>{subtitle}</AppSubtitle>}
        </View>
      </View>
    </TouchableHighlight>
  );
}
