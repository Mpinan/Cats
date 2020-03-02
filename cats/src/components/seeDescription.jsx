import React from "react";
import { Button, UncontrolledCollapse, CardBody, Card } from "reactstrap";

const Description = ({ cats }) => {
  console.log(cats);
  cats.map(cat => {
    return (
      <div>
        <Button color="secondary" style={{ marginBottom: "1rem" }}>
          {console.log(cat.id)}
        </Button>

        {/* <UncontrolledCollapse toggler={cat.id}>
          <Card>
            <CardBody style={{ marginBottom: "3rem" }}>
              <div>{cat.description}</div>
            </CardBody>
          </Card>
        </UncontrolledCollapse> */}
      </div>
    );
  });
};

export default Description;
