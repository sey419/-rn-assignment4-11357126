import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Group2 = () => {
  return (
    <View style={styles.orContinueWithParent}>
      <Text style={styles.orContinueWith}>Or continue with</Text>
      <View style={[styles.groupChild, styles.groupLayout]} />
      <View style={[styles.groupItem, styles.groupLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 1,
    width: 99,
    borderTopWidth: 0.5,
    borderColor: Color.grey70,
    borderStyle: "solid",
    top: 8,
    position: "absolute",
  },
  orContinueWith: {
    top: 0,
    left: 114,
    fontSize: FontSize.regular13_size,
    fontFamily: FontFamily.circularStd,
    color: Color.grey70,
    textAlign: "center",
    position: "absolute",
  },
  groupChild: {
    left: 0,
  },
  groupItem: {
    left: 229,
  },
  orContinueWithParent: {
    width: 327,
    height: 16,
  },
});

export default Group2;
