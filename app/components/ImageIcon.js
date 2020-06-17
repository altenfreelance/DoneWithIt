import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function MCIcon({ size = 35, source }) {
  const containerSize = size * 1.5;
  const styles = StyleSheet.create({
    circle: {
      width: containerSize,
      height: containerSize,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: size,
    },
    image: {
      height: containerSize,
      width: containerSize,
      borderRadius: containerSize / 2,
    },
  });
  return (
    // <View style={styles.circle}>
    <Image style={styles.image} source={source} />
    // </View>
  );
}
const defaultSize = 75;
