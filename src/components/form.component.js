import React, { Component } from "react";
import Paper from "material-ui/Paper";
import { Redirect } from "react-router-dom";
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
import Keyboard from "react-material-ui-keyboard";
import { cyan500 } from "material-ui/styles/colors";

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      redirectToVerification: false
    };
    this.handleFormSubmission = () => {
      if (this.state.firstName && this.state.lastName) {
        this.setState({
          redirectToVerification: true
        });
      }
    };
    this.handleLastName = this.updateLastName.bind(this);
    this.handleFirstName = this.updateFirstName.bind(this);
    this.keyboardLayout = [
      ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
      ["a", "s", "d", "f", "g", "h", "j", "k", "l", "Backspace"],
      ["CapsLock", "z", "x", "c", "v", "b", "n", "m", "-", "CapsLock"],
      ["Escape", "'", ",", "     ", ".", "Enter"]
    ];
  }

  updateLastName(input) {
    this.setState({
      lastName: input
    });
  }

  updateFirstName(input) {
    this.setState({
      firstName: input
    });
  }

  render() {
    if (this.state.redirectToVerification) {
      return (
        <Redirect
          to={
            "/verification/" + this.state.firstName + "/" + this.state.lastName
          }
        />
      );
    }
    return (
      <article
        style={{
          display: "flex",
          flex: "row",
          justifyContent: "space-around"
        }}
      >
        <Paper
          style={{
            height: 500,
            width: 900,
            margin: 20,
            textAlign: "center",
            display: "flex",
            flexDirection: "column"
          }}
          zDepth={5}
        >
          <Card
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column"
            }}
            containerStyle={{
              display: "flex",
              flex: 1,
              flexDirection: "column"
            }}
          >
            <CardTitle title="Lookup Your Appointment Information" />
            <CardText
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                justifyContent: "flex-start"
              }}
            >
              <Keyboard
                textField={
                  <TextField
                    id="firstName"
                    hintText="First Name"
                    value={this.state.firstName}
                    hintStyle={{ color: cyan500 }}
                  />
                }
                automatic
                onInput={this.handleFirstName}
                layouts={[this.keyboardLayout]}
                keyboardKeyHeight={50}
                keyboardKeyWidth={100}
                keyboardKeySymbolSize={36}
              />
              <br />
              <Keyboard
                textField={
                  <TextField
                    id="lastName"
                    hintText="Last Name"
                    value={this.state.lastName}
                    hintStyle={{ color: cyan500 }}
                  />
                }
                automatic
                onInput={this.handleLastName}
                layouts={[this.keyboardLayout]}
                keyboardKeyHeight={50}
                keyboardKeyWidth={100}
                keyboardKeySymbolSize={36}
              />
            </CardText>
            <CardActions
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end"
              }}
            >
              <FloatingActionButton
                onTouchTap={this.handleFormSubmission}
                disabled={!(this.state.firstName && this.state.lastName)}
              >
                <ContentAdd />
              </FloatingActionButton>
            </CardActions>
          </Card>
        </Paper>
      </article>
    );
  }
}
export default FormComponent;
