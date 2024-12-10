import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import SplashButton from "../components/splashButton";
import bagLogo from "../assets/bagLogo.png";
const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>welcome to</Text>
      <Text style={styles.title}>Basic Budget</Text>
      <Image
        source={bagLogo}
        style={styles.logo}
      />
      <SplashButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#73bf9c",
    alignItems: "center",
  },
  heading: {
    color: "#F5F5F5",
    fontSize: 24,
    textAlign: "center",
  },
  title: {
    color: "#F5F5F5",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default SplashScreen;
