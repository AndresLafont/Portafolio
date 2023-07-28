import {Link, useLocation} from "react-router-dom";
import "../styles/Navbar.css";
import Reorder from "@mui/icons-material/Reorder";
import { useEffect, useState, useRef } from "react";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <header>
  <div className="navbar" id={expandNavbar ? "open" : "close"}>
    <div className="toggleButton">
      <button onClick={() => {
        setExpandNavbar((prev) => !prev);
      }}
      >
        <Reorder/>
      </button>
    </div>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/proyectos">Projects</Link>
      <Link to="/experiencia">Experience</Link>
    </div>
  </div>
  </header>
  )
}
export default Navbar;