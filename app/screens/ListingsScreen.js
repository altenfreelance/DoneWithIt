import React from "react";
import { View, ScrollView, FlatList } from "react-native";
import AppText from "../components/AppText";
import SafeScreen from "./SafeScreen";
import Card from "../components/Card";

const listings = [
  {
    id: 1,
    title: "Red Jacket for Sale!",
    subtitle: "$100",
    imgSource: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    subtitle: "$900",
    imgSource: require("../assets/couch.jpg"),
  },
  {
    id: 3,
    title: "Red Jacket for Sale!",
    subtitle: "$100",
    imgSource: require("../assets/jacket.jpg"),
  },
  {
    id: 4,
    title: "Couch in great condition",
    subtitle: "$900",
    imgSource: require("../assets/couch.jpg"),
  },
];

export default function ListingsScreen(props) {
  return (
    <SafeScreen backgroundColor="#f8f4f4">
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            imgSource={item.imgSource}
            title={item.title}
            subtitle={item.subtitle}
          />
        )}
      />

      {/* <Card
          title="Red Jacket for Sale!"
          subtitle="$100"
          imgSource={require("../assets/jacket.jpg")}
        />
        <Card
          title="Couch in great condition"
          subtitle="$900"
          imgSource={require("../assets/couch.jpg")}
        />
        <Card
          title="Red Jacket for Sale!"
          subtitle="$100"
          imgSource={require("../assets/jacket.jpg")}
        />
        <Card
          title="Couch in great condition"
          subtitle="$900"
          imgSource={require("../assets/couch.jpg")}
        /> */}
    </SafeScreen>
  );
}
