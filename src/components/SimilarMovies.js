import React from "react";
import { Link } from "react-router-dom";

function SimilarMovies({ similar }) {
  const { original_title, poster_path } = similar;
  const poster_url = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <Link to={`/movies/${similar.id}`} className="similar-movie-card">
      <div>
        <img
          src={poster_url}
          alt="similarMovieImg"
          className="similar-movie-img"
        />
        <button className="similar-movie_details">View Details</button>
      </div>
      <p>{original_title}</p>
    </Link>
  );
}

export default SimilarMovies;
