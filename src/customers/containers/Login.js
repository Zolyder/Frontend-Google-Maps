import React from "react";
import LoginButton from "../../ui/login/LoginButton";
import Profile from "../components/Profile";
import { Container, Row } from "react-bootstrap";

const Login = () => {
  return (
    <Container className={"d-flex justify-content-center mt-4"}>
      <Row>
        <LoginButton />
        <Profile />
      </Row>
    </Container>
  );
};

export default Login;
