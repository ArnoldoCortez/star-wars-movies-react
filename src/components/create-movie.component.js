import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function CreateMovie(props) {
  const { createMovieFn } = props;
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  function handleDirectorChange(event) {
    setDirector(event.target.value);
  }
  const handleNewMovie = useCallback(() => {
    createMovieFn({ title, director });
  }, [createMovieFn, title, director]);
  return (
    <form style={{ marginTop: 16 }}>
      <TextField
        id="title"
        label="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <TextField
        id="director"
        label="Director"
        value={director}
        onChange={handleDirectorChange}
      />
      <div style={{ marginTop: 16 }}>
        <Button color="primary" variant="contained" onClick={handleNewMovie}>
          Create star wars movie
        </Button>
      </div>
    </form>
  );
}

CreateMovie.propTypes = {
  createMovieFn: PropTypes.func
};

CreateMovie.defaultProps = {
  createMovieFn: () => null
};

export default CreateMovie;