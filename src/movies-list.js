import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

class MoviesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: false
    };
  }
  componentDidMount() {
    /// serviceX.subscribe(user);
    this.setState({ loading: true });
    axios.get("https://swapi.dev/api/films/").then(({ data: { results } }) => {
      console.log("movies data", results);
      this.setState({ movies: results, loading: false });
    });
  }
  componentWillUnmount() {
    /// serviceX.unsubscribe(user);
  }
  render() {
    return (
      <Grid container spacing={3}>
        {this.state.movies.map((movie) => {
          return (
            <Grid item xs={4}>
              <Card>
                <CardHeader title={movie.title} />
                <CardContent>
                  <h4>{movie.director}</h4>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
        <Grid item xs={4}></Grid>
      </Grid>
    );
  }
}

export default MoviesList;