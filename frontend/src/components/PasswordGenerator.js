import React from "react";

const PasswordGenerator = () => {
  const savePassword = () => {
    // Functionality to save password
    console.log("Password saved!");
  };

  return (
    <div
      style={{
        backgroundColor: "hsl(215, 100%, 35%)",
        minHeight: "100vh",
        padding: "0 20px",
        position: "relative", // Position relative to contain the button
      }}
    >
      <h1>This is a React Page</h1>
      <p>Content goes here...</p>
      <button
        onClick={savePassword}
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          backgroundColor: "white",
          color: "hsl(215, 100%, 35%)",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "16px",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        Save Password
      </button>
    </div>
  );
};

export default PasswordGenerator;
