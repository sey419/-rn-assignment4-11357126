# App Component

This is the main App component for a React Native application. It sets up a navigation stack using @react-navigation/native and loads custom fonts using expo-font.

## Dependencies

react
@react-navigation/native
expo-font
react-native
Components

The following components are imported and used in the App:

Homepage
Group
StatusBarIPhoneXOrNewe
HomeIndicator
StatusBarIPhoneXOrNewe1
HaventAnAccount
Group1
Group2
Group3
JobizzText
Font Loading

The App uses useFonts from expo-font to load the following custom fonts:

Poppins-Regular
Poppins-Medium
Poppins-SemiBold
Poppins-Bold
The fonts are loaded from the ./assets/fonts directory.

## Navigation

The App sets up a navigation stack using createNativeStackNavigator from @react-navigation/native-stack. The stack has three screens:

Homepage
Group1
Group2
Each screen is assigned a name and a component to render. The headerShown option is set to false for all screens.

## State

The App uses the useState hook to manage two state variables:

hideSplashScreen: a boolean flag to control the visibility of the splash screen
fontsLoaded: a boolean flag to track the loading status of the custom fonts
error: an error object to track any errors that occur during font loading
Conditional Rendering

The App uses conditional rendering to display the navigation stack only when the fonts are loaded and there is no error.

## Export

The App component is exported as the default export.