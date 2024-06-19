const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import JobizzText from "./components/JobizzText";
import Homepage from "./screens/Homepage";
import StatusBarIPhoneXOrNewe from "./components/StatusBarIPhoneXOrNewe";
import HomeIndicator from "./components/HomeIndicator";
import StatusBarIPhoneXOrNewe1 from "./components/StatusBarIPhoneXOrNewe1";
import HaventAnAccount from "./components/HaventAnAccount";
import Group from "./screens/Group";
import Group1 from "./screens/Group1";
import Group2 from "./components/Group2";
import Group3 from "./components/Group3";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

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
              name="Group"
              component={Group}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group1"
              component={Group1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
