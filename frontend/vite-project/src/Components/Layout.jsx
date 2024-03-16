import Background from "./Background.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-Div">
      <Navbar className="NavBar-layout" />
      <Background className="Background-layout">
        {children}
        {/* Content */}
        <Footer className="Footer-layout" />
      </Background>
    </div>
  );
};

export default Layout;
