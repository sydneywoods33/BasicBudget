import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./src/screens/splashScreen";
import MainInputScreen from "./src/screens/mainInputScreen";
import ExportScreen from "./src/screens/exportScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={{ colors: { background: "#73bf9c" } }}>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainInputScreen"
          component={MainInputScreen}
          options={{ title: "Main Input" }}
        />
        <Stack.Screen
          name="ExportScreen"
          component={ExportScreen}
          options={{ title: "Export Report" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
