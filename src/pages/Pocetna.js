import React from "react";
import Footer from "../components/Footer";
import "./Pages.css";
import NavBar from "../components/NavBar";

function Pocetna() {
  return (
    <div className="container2">
      <img src={require("../slike/logo-with-bakehouse.png")} alt="Instagram logo" />
      <NavBar />
      <Footer />
    </div>
  );
}

export default Pocetna;