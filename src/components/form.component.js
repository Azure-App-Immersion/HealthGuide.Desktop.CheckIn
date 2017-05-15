import React, { Component } from "react";
import Paper from "material-ui/Paper";
import {
  Card,
  CardMedia,
  CardTitle,
  CardText,
  CardActions
} from "material-ui/Card";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import TextField from "material-ui/TextField";
import { orange500, blue500 } from "material-ui/styles/colors";

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null
    };
    this.handleFormSubmission = () => {
      if (this.state.firstName && this.state.lastName) {
        this.props.history.push("/verification");
      }
    };
    this.updateLastName = event => {
      this.setState({
        lastName: event.target.value
      });
    };
    this.updateFirstName = event => {
      this.setState({
        firstName: event.target.value
      });
    };
  }
  render() {
    return (
      <article
        style={{
          display: "flex",
          flex: "row",
          "flex-wrap": "wrap",
          "justify-content": "space-around"
        }}
      >
        <Paper
          style={{
            height: 500,
            width: 900,
            margin: 20,
            textAlign: "center",
            display: "inline-block"
          }}
          zDepth={5}
        >
          <CardTitle title="Lookup Your Appointment Information" />
          <CardText>
            <TextField
              hintText="Last Name"
              value={this.state.lastName}
              onChange={this.updateLastName}
              hintStyle={{ color: orange500 }}
            />
            <br />
            <TextField
              hintText="First Name"
              value={this.state.firstName}
              onChange={this.updateFirstName}
              hintStyle={{ color: orange500 }}
            />
          </CardText>
          <CardActions>
            <FloatingActionButton
              secondary={true}
              onTouchTap={this.handleFormSubmission}
              disabled={!(this.state.firstName && this.state.lastName)}
            >
              <ContentAdd />
            </FloatingActionButton>
          </CardActions>
        </Paper>
      </article>
    );
  }
}
export default FormComponent;
