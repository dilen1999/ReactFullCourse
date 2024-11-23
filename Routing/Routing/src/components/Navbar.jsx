import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <h1>Navbar bar</h1>
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/users"}>Users</Link>
          <Link to={"/about"}>About</Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
