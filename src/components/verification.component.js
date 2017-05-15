import React, { Component } from "react";
import Request from "react-http-request";
import Paper from "material-ui/Paper";

class VerificationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.match.params.firstName,
      lastName: this.props.match.params.lastName
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
          <h3>{this.state.firstName}&nbsp;{this.state.lastName}</h3>
          <Request
            url="http://httpbin.org/ip"
            method="get"
            accept="application/json"
            verbose={true}
          >
            {({ error, result, loading }) => {
              if (loading) {
                return (
                  <div>
                    <h1>loading...</h1>
                  </div>
                );
              } else {
                return (
                  <div>
                    <code>
                      {JSON.stringify(result)}
                    </code>
                  </div>
                );
              }
            }}
          </Request>
        </Paper>
      </article>
    );
  }
}
export default VerificationComponent;
