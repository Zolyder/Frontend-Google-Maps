import React from "react";
import Dashboard from "./customers/containers/Dashboard";
import CustomersByCity from "./customers/containers/CustomersByCity";
import Customer from "./customers/containers/Customer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./customers/containers/Login";
// import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    // <Auth0Provider
    //   domain={process.env.REACT_APP_DOMAIN}
    //   clientId={process.env.REACT_APP_CLIENT_ID}
    //   redirectUri={'/dashboard'}
    // >
      <Router>
        <Navbar
          bg="info"
          variant="dark"
          className="d-flex justify-content-center"
        >
          <Navbar.Brand href="#home">Owlish Challenge</Navbar.Brand>
        </Navbar>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/">
            <Redirect from='/' to="/dashboard" />
          </Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
            {/* <Redirect from='/' to="/dashboard" component={Dashboard}/> */}
          <Route
            exact
            path="/list-customers/:city"
            component={CustomersByCity}
          ></Route>
          <Route exact path="/customer/:id" component={Customer}></Route>
        </Switch>
      </Router>
    // </Auth0Provider>
  );
}

export default App;
