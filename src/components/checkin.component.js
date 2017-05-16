import React, { Component } from "react";
import Request from "react-http-request";
import { Link } from "react-router-dom";
import Configuration from "./configuration";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import FileCloudCircle from "material-ui/svg-icons/file/cloud-circle";
import NavigationCheck from "material-ui/svg-icons/navigation/check";
import { cyan500 } from "material-ui/styles/colors";

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
          <Request
            url={
              this.state.api
            }
            method="post"
            accept="application/json"
            verbose={true}
            send={{
              "id": this.state.id
            }}
          >
            {({ error, result, loading }) => {
              if (loading) {
                return (
                  <div
                    style={{
                      display: "flex",
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <FileCloudCircle
                      className="animate"
                      color={cyan500}
                      style={{
                        height: 250,
                        width: 250
                      }}
                    />
                  </div>
                );
              } else {
                if (result.ok) {
                  return (
                    <div>
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
                    </div>
                  );
                }
              }
            }}
          </Request>
        </Paper>
      </article>
    );
  }
}
export default CheckInComponent;
