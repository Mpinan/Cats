import React, { Component } from "react";

// import Description from "./seeDescription";
import {
  Table,
  Button,
  UncontrolledCollapse,
  CardBody,
  Card
} from "reactstrap";

class DataTable extends Component {
  render() {
    const { cats, search } = this.props;

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
              id={cat.id}
              style={{ marginBottom: "1rem" }}
            >
              See Description
            </Button>

            <UncontrolledCollapse toggler={cat.id}>
              <Card>
                <CardBody style={{ marginBottom: "3rem" }}>
                  <div>{cat.description}</div>
                </CardBody>
              </Card>
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
        {/* <Description cats={filteredCats} /> */}
        <tbody>{filteredCats}</tbody>
      </Table>
    );
  }
}

export default DataTable;
