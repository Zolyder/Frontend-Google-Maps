import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import GoogleMaps from "../components/GoogleMaps/GoogleMaps";
import FormCustomer from "../components/FormCustomer";

const Customer = (props) => {
  const { id: customerId } = props.match.params;
  const [customer, setCustomer] = useState([]);
  const location = {
    lat: customer.lat,
    lng: customer.lng,
  };

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/customer/${customerId}`
        );
        setCustomer(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCustomer();
  }, []);

  return (
    <Container>
      <FormCustomer customer={customer} />
      {customer.lat !== "Not found" ? (
        <GoogleMaps
          location={location}
          address={customer.city}
          zoomLevel={15}
        />
      ) : (
        ""
      )}
    </Container>
  );
};

export default Customer;
