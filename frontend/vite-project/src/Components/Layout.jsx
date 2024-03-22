import Background from "./Background.jsx";
import Navbar from "./Navbar.jsx";

import "./Layout.css";

const Layout = ({
  children,
  favourite,
  selectedLocation,
  setSelectedLocation,
}) => {
  return (
    <div className="layout-Div">
      <Navbar
        className="NavBar-layout"
        favourite={favourite}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />
      <Background className="Background-layout">
        {children}
        {/* Content */}
      </Background>
    </div>
  );
};

export default Layout;
