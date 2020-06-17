import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import fonts from "../config/fonts";

export default function AppTextInput({ iconName, ...otherProps }) {
  return (
    <View style={styles.container}>
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={20}
          color={colors.neutralMedium}
          style={styles.icon}
        />
      )}
      <TextInput style={[fonts.normal, styles.textInput]} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    // borderRadius: 25,
    flexDirection: "row",
    // width: "100%",
    padding: 5,
    marginBottom: 1,
    backgroundColor: colors.light,
    marginHorizontal: 10,
  },
  icon: {
    margin: 10,
  },
  textInput: {
    color: colors.nuetralDark,
    width: "100%",
  },
});
