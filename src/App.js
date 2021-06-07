import React, { useState } from "react";
import "./App.css";
import CreateMovie from "./components/create-movie.component";
import MoviesList from "./components/movies-list.component";
import DetailScreen from './components/details-screen.component';

/** Copied from React docs, don't touch!!!! */
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

export const ThemeContext = React.createContext(themes.light);

export default function App() {
  const [createdMovies, setCreatedMovies] = useState([]);

  const [details, setDetails] = useState({});

  function createMovieFn(newMovie) {
    setCreatedMovies([...createdMovies, newMovie]);
  }

  function getMovieDetails(movie) {
    const details = { 
      episode:movie.episode_id, 
      title: movie.title,
      opening: movie.opening_crawl, 
      director: movie.director,
      producer: movie.producer,
      characters: movie.characters
    };

    setDetails(details);
  }

  return (
    <ThemeContext.Provider value={themes.dark}>
      <div className="App">
        <DetailScreen { ...details } />
        <MoviesList handleDetails={ getMovieDetails } additionalMovies={createdMovies} />
        <CreateMovie createMovieFn={createMovieFn} />
      </div>
    </ThemeContext.Provider>
  );
}