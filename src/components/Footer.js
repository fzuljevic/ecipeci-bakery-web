import React from "react";

export default function Footer() {
  return (
    <footer>
      <p>&copy; Ecipeci 2022</p>
      <div className="footer-div">
        <p>Follow us</p>
          <img src={require("../slike/instagram.png")} 
          onClick={() => window.open("https://www.instagram.com/ecipeci_bakehouse", "_blank")} 
          alt={"Something"} />
      </div>
    </footer>
  );
}
