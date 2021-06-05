import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class CreateMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      producer: ""
    };
  }
  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };
  handleProducerChange = (event) => {
    this.setState({ producer: event.target.value });
  };
  handleNewMovie = () => {
    const payload = {
      title: this.state.title,
      producer: this.state.producer
    };
    console.log("title ", this.state.title, " producer ", this.state.producer);
    this.props.createMovieFn(payload);
  };
  render() {
    return (
      <form>
        <TextField
          id="title"
          label="Title"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <TextField
          id="producer"
          label="Producer"
          value={this.state.producer}
          onChange={this.handleProducerChange}
        />
        <Button color="primary" onClick={this.handleNewMovie}>
          Create star wars movie
        </Button>
      </form>
    );
  }
}

CreateMovie.propTypes = {
  createMovieFn: PropTypes.func
};

CreateMovie.defaultProps = {
  createMovieFn: () => null
};

export default CreateMovie;