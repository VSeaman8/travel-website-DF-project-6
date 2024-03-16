import Footer from "./Footer.jsx";

const Background = ({ children }) => {
  return (
    <div className="background">
      {children}
      <Footer className="Footer-layout" />
    </div>
  );
};

export default Background;
