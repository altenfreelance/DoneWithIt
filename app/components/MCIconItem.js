import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";

import colors from "../config/colors";
import AppHeader from "./AppHeader";

export default function MCIconItem({
  iconName,
  backgroundColor = colors.primary,
  size = 35,
  title,
  style,
}) {
  const containerSize = size * 1.5;

  const styles = StyleSheet.create({
    circle: {
      width: containerSize,
      height: containerSize,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: size,
    },
    container: {
      flexDirection: "row",
      marginVertical: 10,
      marginHorizontal: 20,
    },
    titleContainer: {
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 10,
      marginHorizontal: 20,
    },
  });

  return (
    <View style={style}>
      <TouchableHighlight
        onPress={() => {}}
        underlayColor={colors.nuetralLight}
      >
        <View style={styles.container}>
          <View style={[styles.circle, { backgroundColor: backgroundColor }]}>
            <MaterialCommunityIcons
              name={iconName}
              color={"white"}
              size={size}
            />
          </View>
          <View style={styles.titleContainer}>
            <AppHeader>{title}</AppHeader>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
}
