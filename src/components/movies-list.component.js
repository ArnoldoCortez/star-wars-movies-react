import React, { useState, useEffect, useContext, Fragment } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { ThemeContext } from "../App";
import Button from "@material-ui/core/Button";

function MoviesList({ additionalMovies, handleDetails }) {
  const [state, setState] = useState({
    movies: [],
    loading: false
  });

  const theme = useContext(ThemeContext);

  useEffect(() => {
    /// serviceX.subscribe(user);
    setState({ ...state, loading: true });
    axios.get("https://swapi.dev/api/films/").then(({ data: { results } }) => {
      console.log("movies data", results);
      setState({ movies: results, loading: false });
    });
    return () => {
      /// serviceX.unsubscribe(user);
    };
  }, []);
  useEffect(() => {
    const newMovie = additionalMovies.length
      ? additionalMovies[additionalMovies.length - 1]
      : null;
    if (newMovie !== null) {
      setState({
        ...state,
        movies: [...state.movies, newMovie]
      });
    }
  }, [additionalMovies]);

  const textStyle = {
    color: theme.foreground
  };
  return (
    <Fragment>
      <Grid container spacing={3}>
        {state.movies.map((movie) => {
          return (
            <Grid item xs={4} key={movie.episode_id}>
              <Card style={{ backgroundColor: theme.background }}>
                <CardHeader style={textStyle} title={movie.title} />
                <CardContent>
                  <h4 style={textStyle}>{movie.director}</h4>
                </CardContent>
                <Button onClick={ () => handleDetails(movie) } color='secondary'> See details </Button>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Fragment>
  );
}

MoviesList.propTypes = {
  additionalMovies: PropTypes.array
};

MoviesList.propTypes = {
  additionalMovies: []
};

export default MoviesList;