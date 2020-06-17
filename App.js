import React from "react";
import { StyleSheet, Alert, Platform, StatusBar } from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListItem from "./app/components/ListItem";
import colors from "./app/config/colors";
import Safecreen from "./app/screens/SafeScreen";

export default function App() {
  const { landscape } = useDeviceOrientation();

  return <MyAccountScreen />;
}
