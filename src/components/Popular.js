import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieDetails from "./MovieDetails";

function Popular({ searchTerm }) {
  const [movies, setMovies] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getMovies() {
      setMovies(null);
      const res = !searchTerm
        ? await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=924c4332d88c80dcf5b2da4fc31ac48c&language=en-US&page=${page}`
          )
        : await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=924c4332d88c80dcf5b2da4fc31ac48c&language=en-US&query=${searchTerm}&page=1&include_adult=false`
          );

      setMovies(res.data.results);
    }
    getMovies();
  }, [page, searchTerm]);
  console.log(movies);

  return (
    <div className="main-container">
      <div className="movie-container">
        {movies &&
          movies.map((movie) => <MovieDetails movie={movie} key={movie.id} />)}
      </div>
      <button className="loadMovie" onClick={() => setPage((page) => page + 1)}>
        Load More...
      </button>
    </div>
  );
}

export default Popular;
