import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import LocationPage from "./Pages/LocationPage.jsx";
import LogInPage from "./Pages/LogInPage.jsx";
import Layout from "./Components/Layout.jsx";
import NavigateWithData from "./UtilityFunctions/NavigateWithData.js";
import RegistrationPage from "./Pages/RegistrationPage.jsx";

import "./App.css";

const App = () => {
  const [location, setLocation] = useState("");

  return (
    <div>
      <Layout>
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage location={location} setLocation={setLocation} />}
          />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/location/:location" element={<LocationPage />} />
        </Routes>
        <NavigateWithData location={location} />
      </Layout>
    </div>
  );
};

export default App;
