import React from "react";
import { View, StyleSheet, Image } from "react-native";
import sizes from "../config/sizes";

export default function MCIcon({ size = sizes.defaultIconSize, source }) {
  const styles = StyleSheet.create({
    image: {
      height: size,
      width: size,
      borderRadius: size / 2,
    },
  });
  return (
    // <View style={styles.circle}>
    <Image style={styles.image} source={source} />
    // </View>
  );
}
