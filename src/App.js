import React, { useState } from "react";
import "./App.css";
import CreateMovie from "./components/create-movie.component";
import MoviesList from "./components/movies-list.component";

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
  function createMovieFn(newMovie) {
    setCreatedMovies([...createdMovies, newMovie]);
  }
  return (
    <ThemeContext.Provider value={themes.dark}>
      <div className="App">
        <MoviesList additionalMovies={createdMovies} />
        <CreateMovie createMovieFn={createMovieFn} />
      </div>
    </ThemeContext.Provider>
  );
}