import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import StartComponent from "./start.component";
import FormComponent from "./form.component";
import VerificationComponent from "./verification.component";
import DoneComponent from "./done.component";

class ShellComponent extends Component {
  render() {
    return (
      <Router>
        <div>
          { window.location.pathname.includes('index.html') && <Redirect to="/" /> }
          <Route exact path="/" component={StartComponent} />
          <Route path="/form" component={FormComponent} />
          <Route path="/verification/:firstName/:lastName" component={VerificationComponent} />
          <Route path="/done" component={DoneComponent} />
        </div>
      </Router>
    );
  }
}
export default ShellComponent;
