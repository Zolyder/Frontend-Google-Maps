import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardCustomer = ({ customersCity }) => {
  const { city, customersTotal } = customersCity;

  return (
    <Col xl={4} md={6} sm={10}>
      <Card className="mt-2 mb-2 text-sm-center text-md-left">
        <Card.Body>
          <Card.Title>City: {city}</Card.Title>
          <Card.Text>Customers: {customersTotal}</Card.Text>
          <Link to={`/list-customers/${city}`}>
            <Button variant="secondary">View customers</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardCustomer;
