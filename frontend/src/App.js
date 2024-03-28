// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PasswordLibrary from "./components/PasswordLibrary";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/library" element={<PasswordLibrary />} />
      </Routes>
    </Router>
  );
};

export default App;
