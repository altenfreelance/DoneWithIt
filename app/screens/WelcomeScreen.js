import React from "react";
import { ImageBackground, View, StyleSheet, Text, Image } from "react-native";

import colors from "../config/colors";
import brandFonts from "../config/fonts";
import OurButton from "../components/OurButton";

export default function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={fileStyles.background}
      source={require("../assets/background.jpg")}
      blurRadius={2}
    >
      <View style={fileStyles.logoContainer}>
        <Image
          style={fileStyles.logo}
          source={require("../assets/logo-red.png")}
        ></Image>
        <Text style={[brandFonts.font.normalCaption, { paddingVertical: 15 }]}>
          Sell What You Don't Need
        </Text>
      </View>

      <View style={fileStyles.buttonContainer}>
        <OurButton title="Login" />
      </View>
      <View style={[fileStyles.buttonContainer, { marginBottom: 30 }]}>
        <OurButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const fileStyles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 12,
    marginVertical: 5,
  },
});
