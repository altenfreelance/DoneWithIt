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
import SafeScreen from "./app/screens/SafeScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  const { landscape } = useDeviceOrientation();

  return (
    <SafeScreen>
      <AppTextInput placeholder="Username" iconName="email" />
      <AppTextInput placeholder="what tools" iconName="toolbox" />
    </SafeScreen>
  );
}
