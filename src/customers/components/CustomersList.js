import React from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomersList = ({customers}) => {

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Company</th>
          <th>Action</th>
        </tr>
      </thead>
      {customers.map((customer) => (
        <tbody key={customer.id}>
          <tr>
            <td>{customer.id}</td>
            <td>{customer.first_name}</td>
            <td>{customer.last_name}</td>
            <td>{customer.email}</td>
            <td>{customer.company}</td>
            <td>
            <Link to={`/customer/${customer.id}`}>
              <Button variant="primary">View</Button>{' '}
            </Link>
            </td>
          </tr>
        </tbody>
      ))}
    </Table>
  );
};

export default CustomersList;
