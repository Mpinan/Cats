import React, { Component } from "react";
import { Table, Button, UncontrolledCollapse } from "reactstrap";

class DataTable extends Component {
  render() {
    const { cats, search } = this.props;
    console.log(cats);
    // .filter(cat => {
    //   cat === "Abyssinian";
    // })
    // );
    let filteredCats = cats.map(cat => {
      if (cat.name.toLowerCase().includes(search.toLowerCase())) {
        console.log(cat.name);
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
      }
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

        <tbody>{filteredCats}</tbody>
      </Table>
    );
  }
}

export default DataTable;
