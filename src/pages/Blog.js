import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./Pages.css";

function Blog() {
  return (
      <div className="container2">
        <img src={require("../slike/logo-notext-black.png")} alt="logo" className="logo-notext"/>
        <NavBar />
        <Footer />
      </div>

  );
}

export default Blog;
