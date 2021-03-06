import React, { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

function MyProvider({ children }) {
  const storedFav = JSON.parse(localStorage.getItem("favourites")) || [];
  const [favourites, setFavourites] = useState(storedFav);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  function addToFav(movie) {
    setFavourites([...favourites, movie]);
  }

  function removeFromFav(id) {
    console.log(id);
    const newFavMovies = favourites.filter((movie) => {
      // console.log(Number(movie.id), Number(id));
      return Number(movie.id) !== Number(id);
    });
    console.log("newFavMovies", newFavMovies);
    setFavourites(newFavMovies);
  }

  const checkIsFav = (movie_id) => {
    const found = favourites.find(({ id }) => Number(id) === Number(movie_id));
    console.log("found: ", found);
    return found;
  };

  return (
    <MyContext.Provider
      value={{
        favourites,
        addToFav,
        removeFromFav,
        checkIsFav,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider;
