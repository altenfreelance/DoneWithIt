import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import SafeScreen from "./SafeScreen";
import colors from "../config/colors";
import MCIconItem from "../components/MCIconItem";
import ImageItem from "../components/ImageItem";

export default function MyAccountScreen() {
  const profileSections = [
    {
      iconName: "format-list-bulleted",
      backgroundColor: colors.primary,
      title: "My Listings",
    },
    {
      iconName: "email",
      backgroundColor: colors.secondary,
      title: "My Messages",
    },
    {
      iconName: "logout",
      backgroundColor: "#ffe66d",
      title: "Log Out",
      style: styles.logout,
    },
  ];

  return (
    <SafeScreen>
      <ImageItem
        name="Andrew Alten"
        image={require("../assets/andrew.jpeg")}
        subtitle="altenfreelance@gmail.com"
        style={styles.profileAvatar}
      />
      <FlatList
        data={profileSections}
        renderItem={({ item }) => (
          <MCIconItem
            iconName={item.iconName}
            backgroundColor={item.backgroundColor}
            size={item.size}
            title={item.title}
            style={item.style}
          />
        )}
        keyExtractor={(item) => item.title}
      />
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  profileAvatar: {
    marginTop: 10,
    marginBottom: 40,
  },
  logout: {
    marginVertical: 30,
  },
});
