import React, { useState } from "react";

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(""); // Add this line
  const [firstName, setFirstName] = useState(""); // Add this line
  const [lastName, setLastName] = useState(""); // Add this line

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(
      `Registering with username: ${username}, password: ${password}, email: ${email}, first name: ${firstName}, last name: ${lastName}`
    );

    // Here, you would send a request to your backend to create a new user
    // This could be done using the fetch API, axios, or another method
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
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default RegistrationPage;
