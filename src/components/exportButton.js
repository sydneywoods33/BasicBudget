import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

// ExportButton component renders a button that navigates to the report page when clicked
const ExportButton = () => {
  const navigation = useNavigation();

  // handleExport function navigates to the "ExportScreen" route
  const handleExport = () => {
    navigation.navigate("ExportScreen");
  };

  return (
    <View style={styles.container}>
      <Button
        title="Export Report"
        onPress={handleExport}
        color={styles.button.color}
      />
    </View>
  );
};

// Styles for the ExportButton component
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  button: {
    backgroundColor: "#D9D9D9",
    color: "black",
    borderColor: "black",
  },
});

export default ExportButton;
