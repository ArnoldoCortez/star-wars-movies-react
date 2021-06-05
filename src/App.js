import React, { useState } from "react";
import "./App.css";
import CreateMovie from "./create-movie-fn";
import MoviesList from "./movies-list-fn";

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

const languages = {
  english: "en/us",
  spanish: "es/mx"
};

export const ThemeContext = React.createContext(themes.light);
export const LanguageContext = React.createContext(languages.english);

export default function App() {
  const [createdMovies, setCreatedMovies] = useState([]);
  function createMovieFn(newMovie) {
    setCreatedMovies([...createdMovies, newMovie]);
  }
  return (
    <ThemeContext.Provider value={themes.dark}>
      <LanguageContext.Provider value={languages.spanish}>
        <div className="App">
          <MoviesList additionalMovies={createdMovies} />
          <CreateMovie createMovieFn={createMovieFn} />
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}