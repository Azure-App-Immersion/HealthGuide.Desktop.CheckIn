import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import StartComponent from "./start.component";
import FormComponent from "./form.component";
import VerificationComponent from "./verification.component";
import CheckInComponent from "./checkin.component";

class ShellComponent extends Component {
  render() {
    return (
      <Router>
        <div>
          {window.location.pathname.includes("index.html") &&
            <Redirect to="/" />}
          <Route exact path="/" component={StartComponent} />
          <Route path="/form" component={FormComponent} />
          <Route
            path="/verification/:firstName/:lastName"
            component={VerificationComponent}
          />
          <Route path="/checkin/:id" component={CheckInComponent} />
        </div>
      </Router>
    );
  }
}
export default ShellComponent;
