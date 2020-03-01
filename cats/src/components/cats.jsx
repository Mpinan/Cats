import React, { Component } from "react";
import { Table, Button, UncontrolledCollapse } from "reactstrap";

class DataTable extends Component {
  render() {
    // let filteredCats = this.props.cats.filter(cat => {
    //   return cat.name.indexOf(this.state.search) !== -1;
    // });
    let cats = this.props.cats.map(cat => {
      return (
        <tr key={cat.id}>
          <td>
            <a target="_blank" href={cat.cfa_url}>
              {cat.name}
            </a>
          </td>
          <Button
            color="secondary"
            id="toggler"
            style={{ marginBottom: "1rem" }}
          >
            See Description
          </Button>
          <UncontrolledCollapse toggler="#toggler">
            <td>{cat.description}</td>
          </UncontrolledCollapse>
          <td>{cat.origin}</td>
          <td>{cat.temperament}</td>
          <td>{cat.dog_friendly}</td>
          <td></td>
        </tr>
      );
    });

    return (
      <Table striped responsive hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Origin</th>
            <th>Temperament</th>
            <th>Dog friendly</th>
          </tr>
        </thead>
        <tbody>{cats}</tbody>
      </Table>
    );
  }
}

export default DataTable;
