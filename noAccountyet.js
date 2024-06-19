import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const HaventAnAccount = () => {
  return (
    <Text style={styles.haventAnAccountContainer}>
      <Text style={styles.haventAnAccount}>{`Haven’t an account? `}</Text>
      <Text style={styles.register}>Register</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  haventAnAccount: {
    color: "#bdbec2",
  },
  register: {
    color: Color.colorSteelblue,
  },
  haventAnAccountContainer: {
    fontSize: FontSize.semibold14_size,
    fontFamily: FontFamily.circularStd,
    textAlign: "center",
  },
});

export default HaventAnAccount;
