import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Segments() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="segment-container">
      <Link to={"/popular"}>
        <button
          className="btn header-md"
          style={
            location.pathname === "/popular" || location.pathname === "/"
              ? { color: "rgb(235, 229, 229)" }
              : null
          }
        >
          Popular
        </button>
      </Link>
      <Link to={"/favourites"}>
        <button className="btn header-md">Favourites</button>
      </Link>
    </div>
  );
}

export default Segments;
