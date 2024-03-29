// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LoginSignupPage from "./components/LogInSignUp";
import PasswordGenerator from "./components/PasswordGenerator";
import CustomizePassword from "./components/CustomizePassword";


const App = () => {
  return (
    console.log("FrontEnd Running"),
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/loginsignup" element={<LoginSignupPage />} />
        <Route exact path="/generator" element={<PasswordGenerator />} />
        <Route exact path="/customize" element={<CustomizePassword />} />
      </Routes>
    </Router>
  );
};

export default App;
