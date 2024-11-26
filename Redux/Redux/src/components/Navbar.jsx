import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/users");
  };
  return (
    <div>
      <nav>
        <h1>Navbar bar</h1>
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to={"/contact"}>Contact</Link>
          {/* <Link to={"/users"}>Users</Link> */}
          <li onClick={handleClick}>Users </li>
          <Link to={"/about"}>About</Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
