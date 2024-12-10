import React from "react";
import { useHistory } from "react-router-dom";

// ReturnButton component
const ReturnButton = () => {
  const history = useHistory(); // useHistory hook to navigate

  // Function to handle button click
  const handleClick = () => {
    history.push("/main"); // Navigate to the main input screen
  };

  return (
    // Button with styling and click handler
    <button
      onClick={handleClick}
      style={{
        backgroundColor: "#D9D9D9",
        color: "black",
        border: "1px solid black",
      }}>
      Return to main page
    </button>
  );
};

export default ReturnButton;
