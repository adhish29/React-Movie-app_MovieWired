import React, { useContext } from "react";
import { MyContext } from "../context/FavouriteContext";
import FavouriteMovies from "./FavouriteMovies";
import MovieDetails from "./MovieDetails";

function Favourites() {
  const context = useContext(MyContext);
  const { favourites } = context;
  console.log(favourites);
  return (
    <div className="favourites-container">
      {!favourites ? (
        <h1>No Favourites found</h1>
      ) : (
        favourites.map((movie) => (
          <FavouriteMovies movie={movie} key={movie.id} />
        ))
      )}
    </div>
  );
}

export default Favourites;
