import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import sizes from "../config/sizes";

export default function MCIcon({
  iconName,
  backgroundColor = "black",
  color = "white",
  size = sizes.defaultIconSize,
}) {
  const styles = StyleSheet.create({
    circle: {
      width: size,
      height: size,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: size / 2,
    },
  });
  return (
    <View style={[styles.circle, { backgroundColor: backgroundColor }]}>
      <MaterialCommunityIcons name={iconName} color={color} size={size / 1.5} />
    </View>
  );
}
