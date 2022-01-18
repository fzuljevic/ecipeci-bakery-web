import React from "react";
import Footer from "../components/Footer";
import "./Pages.css";
import NavBar from "../components/NavBar";

function Start() {
  return (
    <div className="container2">
      <img
        src={require("../slike/logo-with-bakehouse.png")}
        alt="Instagram logo"
        className="main-logo"
      />
      <NavBar />
      <Footer />
    </div>
  );
}

export default Start;
