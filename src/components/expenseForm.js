import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

/**
 * ExpenseForm component allows users to add an expense with a specified amount and category.
 * Users can select a predefined category or add a custom category.
 */
const ExpenseForm = ({ setTotalExpenses }) => {
  // State variables to manage form inputs
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(null);
  const [categories, setCategories] = useState([
    { label: "Rent", value: "rent" },
    { label: "Food", value: "food" },
    { label: "Transportation", value: "transportation" },
    { label: "Utilities", value: "utilities" },
    { label: "Entertainment", value: "entertainment" },
    { label: "Personal", value: "personal" },
    { label: "Other", value: "other" },
  ]);
  const [open, setOpen] = useState(false);

  /**
   * Handles the addition of an expense.
   * Currently logs the expense details to the console.
   */
  const handleAddExpense = () => {
    const expenseAmount = parseFloat(amount);
    if (!isNaN(expenseAmount)) {
      setTotalExpenses((prev) => prev + expenseAmount);
      setAmount("");
      setCategory(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Expense</Text>
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
        onPress={handleAddExpense}>
        <Text style={styles.buttonText}>Add Expense</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    borderRadius: 10,
    borderColor: "#ededed",
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

export default ExpenseForm;
