import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import Home from "./pages/Home";
import Proyectos from "./pages/Proyectos";
import Experiencia from "./pages/Experiencia";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProyectoDisplay from "./pages/ProyectoDisplay";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/proyectos/:id" element={<ProyectoDisplay />} />
          <Route path="/experiencia" element={<Experiencia />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
