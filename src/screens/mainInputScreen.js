import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  TouchableOpacity,
} from "react-native";
import IncomeForm from "../components/incomeForm";
import ExpenseForm from "../components/expenseForm";
import ExportButton from "../components/exportButton";
import { useNavigation } from "@react-navigation/native";

/**
 * MainInputScreen component is the main input page for the budget application.
 * It includes an input field for the report name, income and expense forms,
 * displays the net difference between income and expenses, and an export button.
 */
const MainInputScreen = () => {
  // State variables to manage report name, total income, and total expenses
  const [reportName, setReportName] = useState("");
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  // Calculate the net difference between total income and total expenses
  const netDifference = totalIncome - totalExpenses;

  const navigation = useNavigation();

  const handleExport = () => {
    navigation.navigate("ExportScreen", {
      reportName,
      totalIncome,
      totalExpenses,
      netDifference,
    });
  };

  const renderItem = ({ item }) => item;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <FlatList
        data={[
          <View
            style={styles.container}
            key="main">
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Report Name:</Text>
              <TextInput
                style={styles.input}
                value={reportName}
                onChangeText={setReportName}
                placeholder="Example: Monthly Budget Report"
                placeholderTextColor="#C0C0C0" // Light grey placeholder text
              />
            </View>
            {/* Include the income form component */}
            <IncomeForm setTotalIncome={setTotalIncome} />
            {/* Include the expense form component */}
            <ExpenseForm setTotalExpenses={setTotalExpenses} />
            <View style={styles.netDifference}>
              <Text style={styles.netDifferenceText}>Net Difference: ${netDifference}</Text>
            </View>
            {/* Include the export button component */}
            <TouchableOpacity
              style={[styles.button, styles.exportButton]}
              onPress={handleExport}>
              <Text style={styles.buttonText}>Export Report</Text>
            </TouchableOpacity>
          </View>,
          <View
            style={styles.bottomSpacer}
            key="spacer"
          />,
        ]}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollView}
      />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#73bf9c",
    paddingBottom: 100, 
  scrollView: {
    flex: 1,
    backgroundColor: "#73bf9c", 
  container: {
    flex: 1,
    backgroundColor: "#73bf9c", 
    padding: 20,
    alignItems: "center",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    color: "#F5F5F5",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#ededed",
    color: "black",
    width: "100%",
    padding: 10,
    borderRadius: 10, 
  netDifference: {
    backgroundColor: "#ededed",
    color: "black",
    padding: 10,
    marginTop: 5,
    width: "50%",
    alignItems: "center",
    borderRadius: 10, 
  },
  netDifferenceText: {
    color: "black",
  },
  button: {
    backgroundColor: "#FFFFFF", 
    borderColor: "#FFFFFF", 
    borderWidth: 1,
    borderRadius: 20, 
    paddingVertical: 10,
    paddingHorizontal: 15, 
    alignItems: "center",
    width: "40%", 
  },
  exportButton: {
    marginTop: 20, 
  },
  buttonText: {
    color: "#000000", 
    fontSize: 14, 
  },
  bottomSpacer: {
    height: 5,
  },
});

export default MainInputScreen;
