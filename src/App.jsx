import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import Footer
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Feature from "./pages/Feature";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Map from "./pages/Map"; 
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>
      <Footer /> {/* Add footer here */}
    </>
  );
}

export default App;
