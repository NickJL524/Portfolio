//imports
import React from "react";
import { Link } from "react-router-dom";

//navigation for my header
export default function NavBar() {
  return (
    <div id="navBar-container">
      <Link id="navBar-links" to={"/"}>
        Home
      </Link>
      <Link id="navBar-links" to={"/About"}>
        About
      </Link>
      <Link id="navBar-links" to={"/Projects"}>
        Projects
      </Link>
      <Link id="navBar-links" to={"/Experience"}>
        Experience
      </Link>
    </div>
  );
}
