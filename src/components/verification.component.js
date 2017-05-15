import React, { Component } from "react";
import { Link } from "react-router-dom";
import Request from "react-http-request";
import {
  Card,
  CardActions,
  CardHeader,
  CardTitle,
  CardText
} from "material-ui/Card";
import Moment from "moment";
import Configuration from "./configuration";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import HardwareKeyboardArrowLeft
  from "material-ui/svg-icons/hardware/keyboard-arrow-left";
import ActionCheckCircle from "material-ui/svg-icons/action/check-circle";
import FileCloudCircle from "material-ui/svg-icons/file/cloud-circle";
import { cyan500 } from "material-ui/styles/colors";

class VerificationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.match.params.firstName,
      lastName: this.props.match.params.lastName,
      api: new Configuration().APPOINTMENT_VALIDATION_ENDPOINT
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
              this.state.api + this.state.firstName + "/" + this.state.lastName
            }
            method="get"
            accept="application/json"
            verbose={true}
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
                      <h2>Please Validate Your Appointment</h2>
                      <Card
                        style={{
                          textAlign: "left",
                          margin: 100
                        }}
                      >
                        <CardHeader
                          title={
                            result.body.Patient.FirstName +
                              " " +
                              result.body.Patient.LastName
                          }
                          subtitle={
                            result.body.Patient.EmailAddress +
                              " " +
                              result.body.Patient.PhoneNumber
                          }
                        />
                        <CardTitle
                          title={Moment(result.body.Slot).format(
                            "MMM D, h:mm A"
                          )}
                          subtitle={
                            result.body.Doctor.Name +
                              " [" +
                              result.body.Location.Name +
                              "]"
                          }
                        />
                        <CardText>
                          {result.body.Visit.Reason}
                        </CardText>
                        <CardActions
                          style={{
                            display: "flex",
                            justifyContent: "flex-end"
                          }}
                        >
                          <Link to={"/checkin/" + result.body.Id}>
                            <RaisedButton
                              label="Check-In"
                              primary={true}
                              labelPosition="before"
                              icon={<ActionCheckCircle />}
                            />
                          </Link>
                        </CardActions>
                      </Card>
                    </div>
                  );
                } else {
                  return (
                    <div>
                      <h2>Your Appointment Was Not Found</h2>
                      <p>
                        <em>
                          {this.state.firstName + " " + this.state.lastName}
                        </em>
                      </p>
                      <Link to="/form">
                        <RaisedButton
                          label="Go Back to Check-In"
                          primary={true}
                          icon={<HardwareKeyboardArrowLeft />}
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
export default VerificationComponent;
