import React, { useState, useEffect } from "react";
import CustomersList from "../components/CustomersList";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

const CustomersByCity = (props) => {
  const { city } = props.match.params;
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/customers/list-customers?city=${city}`
        );
        setCustomers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCustomers();
  },[]);

  return (
    <Container>
      <Row>
        <Col className="mt-3">
          <CustomersList customers={customers} />
        </Col>
      </Row>
    </Container>
  );
};

export default CustomersByCity;
