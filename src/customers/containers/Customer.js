import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import GoogleMaps from "../components/GoogleMaps/GoogleMaps";
import FormCustomer from "../components/FormCustomer";

const Customer = (props) => {
  const { id: customerId } = props.match.params;
  const [customer, setCustomer] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = {
    lat: customer.lat,
    lng: customer.lng,
  };

  useEffect(() => {
    const fetchCustomer = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8000/customer/${customerId}`
        );
        setCustomer(response.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchCustomer();
  }, []);

  return (
    <Container>
      {!loading ? (
        <>
          <FormCustomer customer={customer} />
          {customer.lat !== "Not found" ? (
            <GoogleMaps
              location={location}
              address={customer.city}
              zoomLevel={15}
            />
          ) : null}
        </>
      ) : null}
    </Container>
  );
};

export default Customer;
