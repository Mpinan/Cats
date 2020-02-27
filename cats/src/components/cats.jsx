import React, { Component } from "react";
import { Table, Button, UncontrolledCollapse } from "reactstrap";

class DataTable extends Component {
  render() {
    const cats = this.props.items.map(cat => {
      return (
        <tr key={cat.id}>
          <td>
            <a target="_blank" href={cat.cfa_url}>
              {cat.name}
            </a>
          </td>
          <Button color="primary" id="toggler" style={{ marginBottom: "1rem" }}>
            See Description
          </Button>
          <UncontrolledCollapse toggler="#toggler">
            <td>{cat.description}</td>
          </UncontrolledCollapse>
          <td>{cat.origin}</td>
          <td>{cat.temperament}</td>
          <td></td>
        </tr>
      );
    });

    return (
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Origin</th>
            <th>Temperament</th>
          </tr>
        </thead>
        <tbody>{cats}</tbody>
      </Table>
    );
  }
}

export default DataTable;
