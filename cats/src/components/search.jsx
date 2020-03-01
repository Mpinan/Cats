import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

const Search = ({ onSearch, totalCats, search }) => {
  const filteredCats = totalCats.filter(cat => {
    console.log(cat.name.toLowerCase().indexOf(search));
    return cat.name.toLowerCase().indexOf(search) !== -1;
  });

  return (
    <Form>
      <FormGroup>
        <Label style={{ margin: "10px 0" }}>Search</Label>
        <Input
          type="text"
          //   onSearch={handleSearch}
          // name="email"
          // id="exampleEmail"
          // placeholder="with a placeholder"
        />
      </FormGroup>
    </Form>
  );
};

export default Search;
