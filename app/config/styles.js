import { StyleSheet, Platform } from "react-native";

const fontFamily = Platform.select({
  ios: {
    fontFamily: "Avenir",
  },
  android: {
    fontFamily: "Roboto",
  },
});

const defaultFontSize = {
  fontSize: 18,
};

export default {
  font: StyleSheet.create({
    normal: {
      ...defaultFontSize,
      ...fontFamily,
    },
    large: {
      fontSize: 40,
      ...fontFamily,
    },
    normalCaption: {
      fontSize: 25,
      fontWeight: "600",
      ...fontFamily,
    },
  }),
};
