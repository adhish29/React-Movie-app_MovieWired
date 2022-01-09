import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar-container">
      <Link to={"/"}>
        <h2 className="header-lg">
          &#60;Movie <br /> Wired&#62;
        </h2>
      </Link>
      <input type="text" placeholder="Quick Search" className="movie-search" />
    </div>
  );
}

export default NavBar;
