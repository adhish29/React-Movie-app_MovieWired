import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MyContext } from "../context/FavouriteContext";

function FavouriteMovies({ movie }) {
  const context = useContext(MyContext);
  const { poster_path, title, vote_average, id } = movie;
  const poster_url = `https://image.tmdb.org/t/p/w500${poster_path}`;

  const removeFromFavHandler = () => {
    context.removeFromFav(id);
  };
  return (
    <div className="fav-movie-card-container">
      <div className="movie-card">
        <img src={poster_url} alt="poster_img" className="poster" />
        <FaStar size={30} style={{ color: "#76c74e" }} className="fastar" />
        <div className="rating">{vote_average} / 10</div>
        <Link to={`/movies/${movie.id}`}>
          <button className="movie_details">View Details</button>
        </Link>
        <button
          className="movie_details remove-fav"
          onClick={removeFromFavHandler}
        >
          Remove from fav
        </button>
      </div>
      <p className="movie-title">{title}</p>
    </div>
  );
}

export default FavouriteMovies;
