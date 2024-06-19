const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Jobizz from "../jobizz.js";
import Homepage from "../homepage.js";
import StatusBarIPhoneXOrNewe from "./components/statusBar.js";
import HomeIndicator from "./components/HomeIndicator.js";
import StatusBarIPhoneXOrNewe1 from "./components/StatusBar.js";
import HaventAnAccount from ".../NoAccountyet.js";
import Group from "../wave.js";
import Group1 from "../login.js";
import Group2 from "../continue.js";
import Group3 from "../link.js";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import Wave from "./wave.js";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Homepage"
              component={Homepage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Wave"
              component={Wave}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="login"
              component={login}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
