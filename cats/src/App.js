import React, { Component } from "react";
const api = "c9ec6e51-269f-4979-a0c7-4d42c125f570";

class App extends Component {
  state = {};

  getCats() {
    fetch(`https://api.thecatapi.com/v1/breeds?${api}`)
      .then(response => response.json())
      .then(result => this.setState({ cats: result }))
      .then(result => console.log(this.state.cats))
      .catch(err => console.log(err));
  }

  render() {
    return <div className="App"></div>;
  }
}

export default App;
