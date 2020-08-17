import React from "react";
import { Pagination as PaginationBootstrap } from "react-bootstrap";
import pagination from "./helper";

const Pagination = (props) => {
  const {
    currentPagePagination,
    setCurrentPagePagination,
    totalCustomers
  } = props;

  const { pages, totalPages } = pagination(totalCustomers, currentPagePagination, 12, 8);

  const handleClickNext = () => {
    if (currentPagePagination < totalPages) {
      setCurrentPagePagination(currentPagePagination+1)
    }
  }

  const handleClickPrevious = () => {
    if (currentPagePagination > 1) {
      setCurrentPagePagination(currentPagePagination-1)
    }
  }

  return (
    <PaginationBootstrap>
      <PaginationBootstrap.Prev onClick={handleClickPrevious} disabled={currentPagePagination === 1} />
      {pages.map((page) => (
        <PaginationBootstrap.Item
          key={page}
          active={page === currentPagePagination}
          onClick={() => setCurrentPagePagination(page)}
        >
          {page}
        </PaginationBootstrap.Item>
      ))}
      <PaginationBootstrap.Next onClick={handleClickNext} disabled={currentPagePagination === totalPages} />
    </PaginationBootstrap>
  );
};

export default Pagination;
