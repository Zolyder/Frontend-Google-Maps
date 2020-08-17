import React from "react";
import { Form, Col, Row } from "react-bootstrap";

const FormCustomer = ({ customer }) => {
  return (
    <Row className="d-flex justify-content-center">
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={customer.first_name}
              disabled
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={customer.last_name}
              disabled
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" defaultValue={customer.email} disabled />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control type="text" defaultValue={customer.gender} disabled />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCompany">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              defaultValue={customer.company}
              disabled
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" defaultValue={customer.city} disabled />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" defaultValue={customer.title} disabled />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridLat">
            <Form.Label>Lat</Form.Label>
            <Form.Control type="text" defaultValue={customer.lat} disabled />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLng">
            <Form.Label>Lng</Form.Label>
            <Form.Control type="text" defaultValue={customer.lng} disabled />
          </Form.Group>
        </Form.Row>
      </Form>
    </Row>
  );
};

export default FormCustomer;
