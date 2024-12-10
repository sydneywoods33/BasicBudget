import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SplashButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("MainInputScreen")}>
        <Text style={styles.buttonText}>Build your Budget</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#000000",
    fontSize: 16,
  },
});

export default SplashButton;
