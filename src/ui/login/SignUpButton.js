import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Container, Row } from "react-bootstrap";

const SignUpButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Container className={"d-flex justify-content-center mt-4"}>
      <Row>
        <Button
          onClick={() =>
            loginWithRedirect({
              screen_hint: "signup",
            })
          }
          variant="primary"
          className="btn-margin"
        >
          Sign up
        </Button>
      </Row>
    </Container>  
  );
};

export default SignUpButton;
