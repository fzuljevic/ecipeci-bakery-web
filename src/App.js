import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pocetna from "./pages/Pocetna";
import Kruh from "./pages/Kruh";
import Lokacije from "./pages/Lokacije";
import ONama from "./pages/ONama";
import Blog from "./pages/Blog";
import Info from "./pages/Info";
// import Col from 'react-bootstrap/Col';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Pocetna />} />
          <Route path="/kruh" element={<Kruh />} />
          <Route path="/lokacije" element={<Lokacije />} />
          <Route path="/o-nama" element={<ONama />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
