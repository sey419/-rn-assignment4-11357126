import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const StatusBarIPhoneXOrNewe = () => {
  return (
    <View style={styles.statusBarIphoneXOrNewe}>
      <Image
        style={styles.notchIcon}
        contentFit="cover"
        source={require("../assets/notch.png")}
      />
      <View style={[styles.rightSide, styles.iconLayout]}>
        <Image
          style={[styles.batteryIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/battery1.png")}
        />
        <Image
          style={[styles.wifiIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/wifi1.png")}
        />
        <Image
          style={[styles.mobileSignalIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/mobile-signal1.png")}
        />
      </View>
      <View style={[styles.leftSide, styles.timeLayout]}>
        <View style={[styles.time, styles.timeLayout]}>
          <Text style={styles.text}>9:41</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 11,
    position: "absolute",
  },
  timeLayout: {
    height: 21,
    width: 54,
    position: "absolute",
  },
  notchIcon: {
    top: -2,
    left: 78,
    width: 0,
    height: 0,
    position: "absolute",
  },
  batteryIcon: {
    right: 0,
    width: 24,
    top: 0,
  },
  wifiIcon: {
    right: 29,
    width: 15,
    top: 0,
  },
  mobileSignalIcon: {
    right: 50,
    width: 17,
    top: 0,
  },
  rightSide: {
    top: 17,
    right: 15,
    width: 67,
  },
  text: {
    top: 1,
    left: 7,
    fontSize: FontSize.regular15_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.defaultBoldSubheadline,
    color: Color.pureWhite,
    textAlign: "center",
    width: 40,
    position: "absolute",
  },
  time: {
    left: 0,
    borderRadius: Border.br_5xl,
    top: 0,
  },
  leftSide: {
    top: 12,
    left: 24,
  },
  statusBarIphoneXOrNewe: {
    width: 375,
    height: 44,
    overflow: "hidden",
  },
});

export default StatusBarIPhoneXOrNewe;
