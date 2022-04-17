import axios from "axios";
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieDetails from "./MovieDetails";

function MovieSearchResults() {
  const [movies, setMovies] = useState();
  const [page, setPage] = useState(1);
  const loc = useLocation();
  const searchTerm = loc.pathname.split("/")[2];
  console.log("searchTerm: ", searchTerm);
  console.log(movies);

  useEffect(() => {
    async function getMovies() {
      const res =
        searchTerm !== undefined &&
        (await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=924c4332d88c80dcf5b2da4fc31ac48c&language=en-US&query=${searchTerm}&page=${page}&include_adult=false`
        ));
      searchTerm && setMovies(res.data.results);
    }
    getMovies();
  }, [page, searchTerm]);

  // return <div className="favourites-container">hello</div>;
  return (
    <div className="search-container">
      {!movies || movies?.length === 0 ? (
        <span className="message">Please search...</span>
      ) : (
        <div className="main-container">
          <div className="movie-container">
            {movies &&
              movies.map(
                (movie) =>
                  (movie.poster_path || movie.backdrop_path) && (
                    <MovieDetails movie={movie} key={movie.id} />
                  )
              )}
          </div>
          <button
            className="loadMovie"
            onClick={() => setPage((page) => page + 1)}
          >
            Load More...
          </button>
        </div>
      )}
    </div>
  );
}

export default MovieSearchResults;
