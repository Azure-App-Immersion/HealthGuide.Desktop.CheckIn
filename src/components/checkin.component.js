import React, { Component } from "react";
import { Link } from "react-router-dom";
import Request from "react-http-request";
import Configuration from "./configuration";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import NavigationCheck from "material-ui/svg-icons/navigation/check";

class CheckInComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      api: new Configuration().CHECKIN_ENDPOINT
    };
  }
  render() {
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
          <h2>You Are Now Checked In</h2>
          <p>
            Please have a seat. You will be called when your doctor is ready to see you.
          </p>
          <Link to={"/"}>
            <RaisedButton
              label="Done"
              primary={true}
              icon={<NavigationCheck />}
            />
          </Link>
        </Paper>
      </article>
    );
  }
}
export default CheckInComponent;
