import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import brandingFonts from "../config/fonts";

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 14,
    width: "100%",
  },
  text: {
    color: colors.light,
    ...brandingFonts.fonts.normal,
    textTransform: "uppercase",
  },
});

export default function OurButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={() => console.log("Button touched")}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
