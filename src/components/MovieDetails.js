import React from "react";
import { FaStar } from "react-icons/fa";

function MovieDetails({ movie }) {
  const { poster_path, title, vote_average } = movie;
  const poster_url = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <div className="movie-card-container">
      <div className="movie-card">
        <img src={poster_url} alt="poster_img" className="poster" />
        <FaStar size={30} style={{ color: "#76c74e" }} className="fastar" />
        <div className="rating">{vote_average} / 10</div>
        <button className="movie_details">View Details</button>
      </div>
      <p className="movie-title">{title}</p>
    </div>
  );
}

export default MovieDetails;
