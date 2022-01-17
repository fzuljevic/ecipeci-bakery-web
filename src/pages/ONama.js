import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "./Pages.css";

function ONama() {
  return (
    <div>
      <div className="container2">
        <img
          src={require("../slike/logo-notext-black.png")}
          alt="logo"
          className="logo-notext"
        />
        <NavBar />
        <Footer />
      </div>
    </div>
  );
}

export default ONama;
