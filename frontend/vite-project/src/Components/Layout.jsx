import Background from "./Background.jsx";
import Navbar from "./Navbar.jsx";

import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-Div">
      <Navbar className="NavBar-layout" />
      <Background className="Background-layout">
        {children}
        {/* Content */}
      </Background>
    </div>
  );
};

export default Layout;
