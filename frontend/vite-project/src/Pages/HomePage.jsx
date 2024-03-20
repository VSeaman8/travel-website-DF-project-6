import SearchEngine from "../Components/searchEngine";
import "./HomePage.css";

const Home = () => {
  return (
    <div className="home-container homepage">
      <h1>Tell Me About...</h1>
      {<SearchEngine />}
    </div>
  );
};

export default Home;
