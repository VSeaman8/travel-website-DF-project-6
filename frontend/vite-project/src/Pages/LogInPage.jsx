import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../UtilityFunctions/InternalApiCall.js";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    /*// Refactored Code for login
    const user = {
      username: username,
      password: password,
    };
    console.log(
      `Logging in with username: ${username} and password: ${password}`
    );
    onLogin(user);
  };*/

    // Code for login before refactoring
    const user = {
      username: username,
      password: password,
    };
    console.log(
      `Logging in with username: ${username} and password: ${password}`
    );

    try {
      const data = await loginUser(user);
      console.log(data);
      console.log("User Logged in successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Login</h1>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" className="loginBtn" />
        <Link to="/register" className="register-link">
          Don't have an account? Register here.
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
