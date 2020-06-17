import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import AppHeader from "./AppHeader";

export default function Card({
  style,
  imgSource,
  title,
  subtitle,
  onPress = () => {
    console.log(`No onPress function passed for Card ${title}`);
  },
}) {
  return (
    <TouchableHighlight
      style={[styles.card, style]}
      underlayColor={colors.light}
      onPress={onPress}
    >
      <View>
        <Image style={styles.image} source={imgSource} />
        <View style={styles.details}>
          <AppHeader style={styles.title}>{title}</AppHeader>
          <AppText style={styles.price}>{subtitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.light,
    marginBottom: 1,
    padding: 15,
    borderRadius: 25,
    margin: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  details: {
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    paddingTop: 5,
    paddingBottom: 5,
  },
});
