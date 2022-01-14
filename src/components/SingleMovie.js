import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { FaImdb } from "react-icons/fa";

import SimilarMovies from "./SimilarMovies";

function SingleMovie() {
  const [movie, setMovie] = useState();
  const [similarMovies, setSimilarMovies] = useState();
  console.log(movie);

  const loc = useLocation();
  const movie_id = loc.pathname.split("/")[2];
  useEffect(() => {
    const GetMovie = async () => {
      const movie_details = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=924c4332d88c80dcf5b2da4fc31ac48c&language=en-US`
      );
      // const providers = await axios.get(
      //   `https://api.themoviedb.org/3/movie/${movie_id}/watch/providers?api_key=924c4332d88c80dcf5b2da4fc31ac48c`
      // );
      const similar_movies = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=924c4332d88c80dcf5b2da4fc31ac48c&language=en-US&page=1`
      );
      setMovie(movie_details.data);
      // console.log(
      //   providers.data.results["EG"] && providers.data.results["EG"].flatrate[0]
      // );
      setSimilarMovies(similar_movies.data.results.slice(0, 4));
    };
    GetMovie();
  }, [movie_id]);

  const getGenres = () => {
    if (movie) {
      let arr = movie.genres.map(({ name, id }, idx) => {
        console.log(name, id, idx);
        if (idx === movie.genres.length - 1)
          return <span key={id}>{name}</span>;
        return <span key={id}>{name + " / "}</span>;
      });
      // console.log(arr);
      return arr;
    }
  };

  return (
    <>
      {movie && (
        <div className="singleMovie-container">
          <div className="movie-img-fav">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="poster"
              className="poster_image"
            />
            <button>Add to Favourites</button>
          </div>
          <div className="movie-info">
            <h1>{movie.original_title}</h1>
            <h3 className="release-year">{movie.release_date.split("-")[0]}</h3>
            <div className="genres">{getGenres()}</div>
            <p className="desc">Description</p>
            <p className="desc-details">{movie.overview}</p>
            <div className="imdb-details">
              <FaImdb className="imdb_icon" size={32} />
              <span>{movie.vote_average}</span>
            </div>
          </div>
          <div className="similar-movies-container">
            <h2>Similar Movies</h2>
            {similarMovies &&
              similarMovies.map((similar) => (
                <SimilarMovies key={similar.id} similar={similar} />
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default SingleMovie;
