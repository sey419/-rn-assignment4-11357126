import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Group = () => {
  return (
    <View style={styles.headlineParent}>
      <Text style={[styles.headline, styles.headlinePosition]}>
        Welcome Back 👋
      </Text>
      <Text style={[styles.headline1, styles.headlinePosition]}>
        Let’s log in. Apply to jobs!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headlinePosition: {
    textAlign: "left",
    color: Color.black,
    left: 0,
    position: "absolute",
  },
  headline: {
    top: 0,
    fontSize: FontSize.semibold24_size,
    letterSpacing: -0.4,
    lineHeight: 34,
    fontWeight: "600",
    fontFamily: FontFamily.semibold14,
  },
  headline1: {
    top: 41,
    fontSize: FontSize.semibold14_size,
    letterSpacing: -0.1,
    lineHeight: 22,
    fontFamily: FontFamily.regular13,
    opacity: 0.4,
  },
  headlineParent: {
    flex: 1,
    width: "100%",
    height: 63,
  },
});

export default Group;
