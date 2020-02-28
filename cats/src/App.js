import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Cats from "./components/cats";
import Paginate from "./components/pagination";
const api = "c9ec6e51-269f-4979-a0c7-4d42c125f570";

class App extends Component {
  state = {
    cats: [],
    currentPage: 1,
    catsPerPage: 5
  };

  componentDidMount() {
    this.getCats();
  }

  getCats() {
    fetch(`https://api.thecatapi.com/v1/breeds?${api}`)
      .then(response => response.json())
      .then(result => this.setState({ cats: result }))
      .then(result => console.log(this.state.cats))
      .catch(err => console.log(err));
  }

  render() {
    // Pagination
    const indexLastCat = this.state.currentPage * this.state.catsPerPage;
    const indexFirstCat = indexLastCat - this.state.catsPerPage;
    const currentCats = this.state.cats.slice(indexFirstCat, indexLastCat);

    const handlePageChange = number => {
      this.setState({ currentPage: number });
    };

    return (
      <Container className="App">
        <Row>
          <Col>
            <h1 style={{ margin: "20px 0" }}>The Purrfect Cattionary</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Cats cats={currentCats} />
          </Col>
        </Row>
        <Paginate
          catsPerPage={this.state.catsPerPage}
          totalCats={this.state.cats.length}
          passPage={handlePageChange}
        />
      </Container>
    );
  }
}

export default App;
