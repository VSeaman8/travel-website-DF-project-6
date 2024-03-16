import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import LogInPage from "./Pages/LogInPage.jsx";
import Layout from "./Components/Layout.jsx";
import "./App.css";

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/login" element={<LogInPage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
