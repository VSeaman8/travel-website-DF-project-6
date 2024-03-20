import SearchEngine from "../Components/searchEngine";
import "./HomePage.css";

const Home = ({ location, setLocation }) => {
  return (
    <div className="home-container homepage">
      <h1>Tell Me About...</h1>
      {<SearchEngine setLocation={setLocation} />}
    </div>
  );
};

export default Home;
