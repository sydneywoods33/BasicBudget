import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/splashScreen";
import MainInputScreen from "../screens/mainInputScreen";
import ExportScreen from "../screens/exportScreen";

// Create a stack navigator
const Stack = createStackNavigator();

// Customize the default theme
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#8FCCAF", // Light green background color
  },
};

// Define the main navigation component
const AppNavigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#8FCCAF", // Light green background color
          },
          headerTintColor: "#FFFFFF", // White text color
          headerTitleStyle: {
            fontWeight: "bold",
          },
          cardStyle: {
            backgroundColor: "#8FCCAF", // Light green background color for the entire screen
          },
        }}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }} // Hide header for splash screen
        />
        <Stack.Screen
          name="MainInputScreen"
          component={MainInputScreen}
          options={{ title: "Main Input" }} // Set title for main input screen
        />
        <Stack.Screen
          name="ExportScreen"
          component={ExportScreen}
          options={{ title: "Export Report" }} // Set title for export screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
