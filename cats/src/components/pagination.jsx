import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const Paginate = ({ catsPerPage, totalCats }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCats / catsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination aria-label="Page navigation example">
      {pageNumbers.map(number => (
        <PaginationItem>
          <PaginationLink href="#">{number}</PaginationLink>
        </PaginationItem>
      ))}
    </Pagination>
  );
};

export default Paginate;
