import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Locations from "./pages/Locations";
import Blog from "./pages/Blog";
import Info from "./pages/Info";
import Start from "./pages/Start";
import AboutUs from "./pages/AboutUs";
import Bread from "./pages/Bread";
// import Col from 'react-bootstrap/Col';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Start />} />
          <Route path="/bread" element={<Bread />} />
          <Route path="/lokacije" element={<Locations />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
