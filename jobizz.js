import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const JobizzText = () => {
  return <Text style={styles.jobizz}>Jobizz</Text>;
};

const styles = StyleSheet.create({
  jobizz: {
    fontSize: 22,
    letterSpacing: -0.4,
    fontWeight: "600",
    fontFamily: FontFamily.semibold14,
    color: Color.colorSteelblue,
    textAlign: "center",
    width: 150,
  },
});

export default JobizzText;
