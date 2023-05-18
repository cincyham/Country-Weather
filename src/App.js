import "./Css/App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import CountryDetails from './Components/CountryDetails';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/country-details" Component={CountryDetails} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
