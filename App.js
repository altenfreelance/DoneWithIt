import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  Text,
  StatusBar,
  Dimensions,
  Image,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  const handlePress = () =>
    Alert.alert("Title", "Hey its working", [
      { text: "Yes", onPress: () => console.log("Yes clicked") },
      { text: "No thanks" },
    ]);

  // console.log(Dimensions.get("screen"));
  // console.log(useDeviceOrientation());

  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.appContainer}>
      {/* <WelcomeScreen /> */}
      <ViewImageScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    fontFamily: "Cochin",
  },
});
