import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import "./NavBar.css";

function NavBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <CgIcons.CgClose />
            </Link>
          </li>
          {SideBarData.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
