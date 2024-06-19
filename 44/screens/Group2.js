import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const Group2 = () => {
  return (
    <View style={styles.buttonParent}>
      <View style={styles.button}>
        <Text style={styles.next}>Log in</Text>
      </View>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.email, styles.nameTypo]}>eric@gmail.com</Text>
      </View>
      <View style={styles.groupPosition}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.name, styles.nameTypo]}>Eric Atsu</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: 0,
    top: 0,
    height: 52,
    width: 327,
    position: "absolute",
  },
  nameTypo: {
    textAlign: "left",
    color: Color.grey70,
    lineHeight: 21,
    letterSpacing: -0.1,
    fontSize: FontSize.regular14_size,
    top: 15,
    fontFamily: FontFamily.medium16,
    fontWeight: "500",
    position: "absolute",
  },
  next: {
    fontSize: FontSize.medium16_size,
    letterSpacing: -0.2,
    lineHeight: 24,
    color: Color.pureWhite,
    textAlign: "center",
    fontFamily: FontFamily.medium16,
    fontWeight: "500",
  },
  button: {
    top: 152,
    borderRadius: 5,
    backgroundColor: Color.colorSteelblue,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_29xl,
    paddingVertical: Padding.p_base,
    width: 327,
    left: 1,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.grey70,
    borderWidth: 1,
  },
  email: {
    left: 15,
  },
  rectangleParent: {
    top: 68,
    height: 52,
    width: 327,
    left: 1,
    position: "absolute",
  },
  name: {
    left: 16,
  },
  buttonParent: {
    flex: 1,
    width: "100%",
    height: 208,
  },
});

export default Group2;
