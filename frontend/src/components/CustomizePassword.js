import React, { useState } from "react";

const CustomizePassword = () => {
  const [showDialog, setShowDialog] = useState(false); // State to control dialog visibility

  const savePassword = () => {
    // Functionality to save password
    console.log("Password saved!");
    setShowDialog(true); // Show dialog after saving password
  };

  const handleCloseDialog = () => {
    setShowDialog(false); // Close dialog
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

      {showDialog && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="bg-white p-4 rounded shadow"
            style={{
              maxWidth: "400px",
              margin: "0 auto",
            }}
          >
            <h3>Identity</h3>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter identity"
            />
            <h3>Password</h3>
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Enter password"
            />
            <div className="d-flex justify-content-between">
              <button
                onClick={() => {
                  // Functionality to save identity and password
                  console.log("Identity and password saved!");
                  handleCloseDialog();
                }}
                className="btn btn-primary mr-2"
              >
                Save
              </button>

              <button onClick={handleCloseDialog} className="btn btn-secondary">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomizePassword;
