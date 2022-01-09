import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieDetails from "./MovieDetails";

function Popular() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    async function getMovies() {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=924c4332d88c80dcf5b2da4fc31ac48c&language=en-US&page=1`
      );
      setMovies(res.data.results);
    }
    getMovies();
  }, []);
  console.log(movies);

  return (
    <div className="movie-container">
      {movies &&
        movies.map((movie) => <MovieDetails movie={movie} key={movie.id} />)}
    </div>
  );
}

export default Popular;
