import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import AppHeader from "./AppHeader";
import AppText from "./AppText";
import brandingMargins from "../config/margins";
import colors from "../config/colors";

function ImageItem({ image, name, subtitle, size, style }) {
  const overridenSizeStyles =
    size != null ? { height: size, width: size, borderRadius: size / 2 } : {};

  return (
    <View style={[styles.container, style]}>
      <Image style={[styles.image, overridenSizeStyles]} source={image}></Image>
      <View style={styles.textContainer}>
        <AppHeader>{name}</AppHeader>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}
const defaultSize = 75;
const { marginHorizontal } = brandingMargins.margins.defaultHorizonalMargin;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  image: {
    height: defaultSize,
    width: defaultSize,
    borderRadius: defaultSize / 2,
    marginRight: 10,
  },
  textContainer: {
    justifyContent: "center",
  },
  subtitle: {
    color: colors.nuetralDark,
    fontWeight: "bold",
  },
});

export default ImageItem;
