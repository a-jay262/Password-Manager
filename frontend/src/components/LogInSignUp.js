import React, { useState } from "react";
import axios from "axios";

const LoginSignupPage = () => {
  const [loginData, setLoginData] = useState({ username: "",email: "", password: "" });
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [loginFormVisible, setLoginFormVisible] = useState(true);

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(
          "http://localhost:5000/api/logIn",
          loginData
        );
        console.log("User Logged In:", response.data);
        // Handle successful login
      }catch (error) {
      console.error("Error in Axios request:", error);
      // Handle error
      }
    // Login functionality
    console.log("Logging in with:", loginData);
  };

  const handleSignupSubmit =async (e) => {
    e.preventDefault();
    // Signup functionality
    try{
      const response = await axios.post(
          "http://localhost:5000/api/signUp",
          signupData
        );
        console.log("User Registered:", response.data);
    }catch (error) {
      console.error("Error in Axios request:", error);
      // Handle error
      }
    console.log("Signing up with:", signupData);
  };

  return (
    <div
      className="bg-primary d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="card p-4">
        <h2 className="text-center mb-4">
          {loginFormVisible ? "Login" : "Sign Up"}
        </h2>
        {loginFormVisible ? (
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Username"
                name="username"
                value={loginData.username}
                onChange={handleLoginChange}
              />
              <input
                type="email"
                className="form-control mb-2"
                placeholder="Email"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
              />
              <input
                type="password"
                className="form-control mb-2"
                placeholder="Password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
              />
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  style={{ maxWidth: "200px" }}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSignupSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Username"
                name="username"
                value={signupData.username}
                onChange={handleSignupChange}
              />
              <input
                type="email"
                className="form-control mb-2"
                placeholder="Email"
                name="email"
                value={signupData.email}
                onChange={handleSignupChange}
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Phone Number"
                name="phoneNumber"
                value={signupData.phoneNumber}
                onChange={handleSignupChange}
              />
              <input
                type="password"
                className="form-control mb-2"
                placeholder="Password"
                name="password"
                value={signupData.password}
                onChange={handleSignupChange}
              />
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  style={{ maxWidth: "200px" }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        )}
        <p className="text-center mt-3">
          {loginFormVisible
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <button
            className="btn btn-link"
            onClick={() => setLoginFormVisible(!loginFormVisible)}
          >
            {loginFormVisible ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignupPage;
