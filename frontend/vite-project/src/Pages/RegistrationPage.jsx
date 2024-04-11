import React, { useState } from "react";
import { registerUser } from "../utilityFunctions/InternalApiCall.js";

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(
      `Registering with username: ${username}, password: ${password}, email: ${email}, first name: ${firstName}, last name: ${lastName}`
    );
    const newUser = {
      username: username,
      password: password,
      email: email,
      firstName: firstName,
      lastName: lastName,
    };

    try {
      const data = await registerUser(newUser);
      console.log(data);

      // Clear the Form
      setUsername("");
      setPassword("");
      setEmail("");
      setFirstName("");
      setLastName("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="registration-container">
      <form onSubmit={handleSubmit} className="registration-form glassmorphism">
        <h1>Register</h1>
        <label className="registration-label-firstName">
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="registration-input-firstName"
          />
        </label>
        <label className="registration-label-lastName">
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="registration-input-lastName"
          />
        </label>
        <label className="registration-label-email">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="registration-input-email"
          />
        </label>
        <label className="registration-label-username">
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="registration-input-username"
          />
        </label>
        <label className="registration-label-password">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="registration-input-password"
          />
        </label>
        <input type="submit" value="Register" className="registerBtn" />
      </form>
    </div>
  );
};

export default RegistrationPage;
