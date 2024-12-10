import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./src/screens/splashScreen";
import MainInputScreen from "./src/screens/mainInputScreen";
import ExportScreen from "./src/screens/exportScreen";

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#8FCCAF", 
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#8FCCAF", 
          },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainInputScreen"
          component={MainInputScreen}
          options={{
            title: "Main Input",
            headerLeft: null, 
        />
        <Stack.Screen
          name="ExportScreen"
          component={ExportScreen}
          options={{
            title: "Export Report",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
