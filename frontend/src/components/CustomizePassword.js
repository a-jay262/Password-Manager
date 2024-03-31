import React, { useState } from 'react';
import './PasswordStrengthMeter.css'; // Assuming CSS is applicable for both components

// PasswordStrengthMeter component definition
const PasswordStrengthMeter = (props) => {
  const testedResult = props.password;
  const createPasswordLabel = () => {
    let score = 0;
    let regexPositive = ["[A-Z]", "[a-z]", "[0-9]", "\\W"];
    regexPositive.forEach((regex) => {
      if (new RegExp(regex).test(testedResult)) {
        score += 1;
      }
    });
    switch (score) {
      case 0:
        return { value: 0, info: "" };
      case 1:
        return { value: 1, info: "Weak" };
      case 2:
        return { value: 2, info: "Fair" };
      case 3:
        return { value: 3, info: "Good" };
      case 4:
        return { value: 4, info: "Strong" };
      default:
        return null;
    }
  };
  props.actions(createPasswordLabel().info);

  return (
    <>
      <div className="password-strength-meter">
        <progress
          className={`password-strength-meter-progress strength-${createPasswordLabel().info}`}
          value={createPasswordLabel().value}
          max="4"
        />
        <br />
        <p className="password-strength-meter-label">
          {props.password && (
            <>
              <p className={`password__label strength-${createPasswordLabel().info}`}>
                Password strength: <span>{createPasswordLabel().info}</span>
              </p>
            </>
          )}
        </p>
      </div>
    </>
  );
};

// CustomizePasswordApp component definition
const CustomizePasswordApp = () => {
  const [userInfo, setUserInfo] = useState({
    password: '',
  });

  const [isError, setError] = useState(null);
  const [isStrength, setStrength] = useState(null);

  const handleChangePassword = (e) => {
    let password = e.target.value;
    setUserInfo({
      ...userInfo,
      password: e.target.value,
    });
    // Reset error state on change
    setError(null);
    // Password validation logic
    let capsCount, smallCount, numberCount, symbolCount;
    // Initial basic length check
    if (password.length < 4) {
      setError("Password must be minimum 4 characters include one UPPERCASE, lowercase, number, and special character: @$! % * ? &");
      return;
    }
    // Detailed checks
    capsCount = (password.match(/[A-Z]/g) || []).length;
    smallCount = (password.match(/[a-z]/g) || []).length;
    numberCount = (password.match(/[0-9]/g) || []).length;
    symbolCount = (password.match(/\W/g) || []).length;
    if (capsCount < 1) {
      setError("Must contain one UPPERCASE letter");
    } else if (smallCount < 1) {
      setError("Must contain one lowercase letter");
    } else if (numberCount < 1) {
      setError("Must contain one number");
    } else if (symbolCount < 1) {
      setError("Must contain one special character: @$! % * ? &");
    }
  };

  const dataHandler = async (childData) => {
    setStrength(childData);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(userInfo.password);
    // Implement submission logic here
  };

  return (
    <div className="App">
      <h1>Password Strength Checker in React</h1>
      <div className="wrapper">
        <form onSubmit={onSubmit} className="login__Form">
          <label htmlFor="password">
            Password
            {isError !== null && <p className="errors"> - {isError}</p>}
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChangePassword}
            required
          />
          <PasswordStrengthMeter password={userInfo.password} actions={dataHandler} />
          {isStrength === 'Strong' && (
            <button type="submit" className="gr__log__button">
              Create Account
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CustomizePasswordApp;

