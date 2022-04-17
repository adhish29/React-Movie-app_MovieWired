import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Popular from "./Popular";

function NavBar() {
  const searchTermRef = useRef();
  const [searchTerm, setSearchTerm] = useState();

  function handleSearch() {
    setSearchTerm(searchTermRef.current.value);
  }
  return (
    <>
      <div className="navbar-container">
        <Link to={"/"}>
          <h2 className="header-lg">
            &#60;Movie <br /> Wired&#62;
          </h2>
        </Link>
        <div className="inp-segment">
          <input
            type="text"
            placeholder="Quick Search"
            className="movie-search"
            ref={searchTermRef}
          />

          <button onClick={handleSearch} className="searchBtn">
            Search
          </button>
        </div>
      </div>
      {searchTerm && <Popular searchTerm={searchTerm} />}
    </>
  );
}

export default NavBar;
