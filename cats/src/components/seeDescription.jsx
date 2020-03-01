import React from "react";
import { Button, UncontrolledCollapse } from "reactstrap";

const Description = ({}) => {
  function clickHandler() {
    // if (cat.event.target.id) {
    //   return;
    // }
  }
  return (
    <div>
      <Button
        onClick={clickHandler}
        // key={cat.id}
        color="secondary"
        id="toggler"
        style={{ marginBottom: "1rem" }}
      >
        See Description
      </Button>
      <UncontrolledCollapse toggler="#toggler">
        {/* <td>{cat.description}</td> */}
      </UncontrolledCollapse>
    </div>
  );
};

export default Description;
