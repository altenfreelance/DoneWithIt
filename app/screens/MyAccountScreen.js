import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import SafeScreen from "./SafeScreen";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import MCIcon from "../components/MCIcon";
import ImageIcon from "../components/ImageIcon";
import ListItemSeparator from "../components/ListItemSeparator";

export default function MyAccountScreen() {
  const profileSections = [
    {
      title: "My Listings",
      iconComponent: (
        <MCIcon
          iconName={"format-list-bulleted"}
          backgroundColor={colors.primary}
        />
      ),
    },
    {
      title: "My Messages",
      iconComponent: (
        <MCIcon iconName={"email"} backgroundColor={colors.secondary} />
      ),
    },
  ];

  return (
    <SafeScreen color={colors.nuetralLight}>
      <View>
        <ListItem
          title="Andrew Alten"
          subtitle="altenfreelance@gmail.com"
          iconComponent={
            <ImageIcon source={require("../assets/andrew.jpeg")} size={70} />
          }
          style={styles.profileAvatar}
          onPress={() => alert("Is this working?")}
        />

        <FlatList
          data={profileSections}
          renderItem={({ item }) => (
            <ListItem title={item.title} iconComponent={item.iconComponent} />
          )}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeparator}
        />

        <ListItem
          title="Log Out"
          style={styles.logout}
          iconComponent={<MCIcon iconName="logout" backgroundColor="#ffe66d" />}
        />
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  profileAvatar: {
    marginBottom: 30,
    marginTop: 35,
    paddingVertical: 25,
  },
  logout: { marginVertical: 50 },
});
