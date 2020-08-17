import React from "react";
import { Container, Row } from "react-bootstrap";
import CardCustomer from "./CardCustomer";
import Pagination from "../../ui/pagination/Pagination";

const CardList = (props) => {
  let cont = 0;
  const {
    customersByCity,
    currentPagePagination,
    setCurrentPagePagination,
    totalCustomers,
  } = props;

  return (
    <Container>
      <Row className="d-flex justify-content-left">
        {customersByCity.map((customersCity) => (
          <CardCustomer key={cont++} customersCity={customersCity} />
        ))}
      </Row>
      <Row className="d-flex justify-content-center mt-3">
        <Pagination
          currentPagePagination={currentPagePagination}
          setCurrentPagePagination={setCurrentPagePagination}
          totalCustomers={totalCustomers}
        />
      </Row>
    </Container>
  );
};

export default CardList;
