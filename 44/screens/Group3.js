import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Group3 = () => {
  return (
    <View style={styles.headlineParent}>
      <Text style={[styles.headline, styles.headlineTypo]}>
        Welcome Back 👋
      </Text>
      <Text style={[styles.headline1, styles.headlineTypo]}>
        Let’s log in. Apply to jobs!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headlineTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.medium16,
    left: 0,
    position: "absolute",
  },
  headline: {
    top: 0,
    fontSize: FontSize.semibold24_size,
    letterSpacing: -0.4,
    lineHeight: 34,
    fontWeight: "600",
  },
  headline1: {
    top: 41,
    fontSize: FontSize.regular14_size,
    letterSpacing: -0.1,
    lineHeight: 22,
    opacity: 0.4,
  },
  headlineParent: {
    flex: 1,
    width: "100%",
    height: 63,
  },
});

export default Group3;
