import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

/**
 * ExportScreen component displays the financial report.
 * It shows the report name, total income, total expenses, and net difference.
 * It also includes a button to navigate back to the main input screen.
 */
const ExportScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { reportName, totalIncome, totalExpenses, netDifference } = route.params;

  // Function to handle the return button click
  const handleReturn = () => {
    navigation.navigate("MainInputScreen");
  };

  return (
    <View style={styles.container}>
      {/* Report name */}
      <Text style={styles.title}>{reportName}</Text>

      {/* Total income section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Total Income</Text>
        <Text style={styles.sectionContent}>${totalIncome}</Text>
      </View>

      {/* Total expenses section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Total Expenses</Text>
        <Text style={styles.sectionContent}>${totalExpenses}</Text>
      </View>

      {/* Net difference section */}
      <View style={styles.netDifference}>
        <Text style={styles.sectionTitle}>Net Difference</Text>
        <Text style={styles.sectionContent}>${netDifference}</Text>
      </View>

      {/* Return button */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleReturn}>
        <Text style={styles.buttonText}>Return to Main Input Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#73bf9c",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    fontSize: 24,
    marginBottom: 20,
  },
  section: {
    backgroundColor: "#8FCCAF",
    padding: 20,
    marginVertical: 10,
    width: "100%",
    alignItems: "center",
  },
  sectionTitle: {
    color: "black",
    fontSize: 18,
    marginBottom: 5,
  },
  sectionContent: {
    color: "black",
    fontSize: 16,
  },
  netDifference: {
    backgroundColor: "#D9D9D9",
    padding: 20,
    marginVertical: 10,
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#000000",
    fontSize: 14,
  },
});

export default ExportScreen;
