import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const HomeIndicator = () => {
  return (
    <View style={styles.homeIndicator}>
      <View style={styles.homeIndicator1} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeIndicator1: {
    position: "absolute",
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.black,
    width: 134,
    height: 5,
    display: "none",
  },
  homeIndicator: {
    width: 375,
    height: 34,
  },
});

export default HomeIndicator;
