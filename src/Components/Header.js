import "../Css/Header.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Header() {
  
    return (
      <div id="header">
        <div id="header-items">
          <Link className="link" to="/">
            <h2 className="title" id="header-h2">
              Country Weather
            </h2>
          </Link>
        </div>
      </div>
    );
}

export default Header;