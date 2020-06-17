import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function MCIcon({
  iconName,
  backgroundColor = "black",
  color = "white",
  size = 35,
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
  });
  return (
    <View style={[styles.circle, { backgroundColor: backgroundColor }]}>
      <MaterialCommunityIcons name={iconName} color={color} size={size} />
    </View>
  );
}
