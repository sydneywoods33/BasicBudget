import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

// IncomeForm component for adding income details
const IncomeForm = ({ setTotalIncome }) => {
  // State variables for amount, category, categories, and dropdown open state
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(null);
  const [categories, setCategories] = useState([
    { label: "Salary", value: "salary" },
    { label: "Investments", value: "investments" },
    { label: "Freelance", value: "freelance" },
    { label: "Government assistance", value: "government_assistance" },
    { label: "Other", value: "other" },
  ]);
  const [open, setOpen] = useState(false);

  // Function to handle adding income
  const handleAddIncome = () => {
    const incomeAmount = parseFloat(amount);
    if (!isNaN(incomeAmount)) {
      setTotalIncome((prev) => prev + incomeAmount);
      setAmount("");
      setCategory(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Income</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Amount</Text>
        <TextInput
          style={styles.input}
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          placeholder="Enter amount"
          placeholderTextColor="#C0C0C0"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Category</Text>
        <DropDownPicker
          open={open}
          value={category}
          items={categories}
          setOpen={setOpen}
          setValue={setCategory}
          setItems={setCategories}
          placeholder="Select a category"
          placeholderColor="#C0C0C0"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleAddIncome}>
        <Text style={styles.buttonText}>Add Income</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for the IncomeForm component
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8FCCAF",
    padding: 20,
    marginBottom: 20,
    width: "100%",
    maxWidth: 400,
  },
  title: {
    color: "#F5F5F5",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    color: "#F5F5F5",
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#ededed",
    color: "black",
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
    height: 40,
    width: "100%",
  },
  dropdown: {
    backgroundColor: "#ededed",
    borderColor: "#ededed",
    borderRadius: 10,
    height: 40,
    width: "100%",
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  dropdownContainer: {
    backgroundColor: "#ededed",
    borderColor: "#ededed",
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#FFFFFF",
    borderColor: "#808080",
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#000000",
    fontSize: 14,
  },
});

export default IncomeForm;
