import React, { Component } from "react";
import Paper from "material-ui/Paper";

class DoneComponent extends Component {
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
          <h2>Verification</h2>
        </Paper>
      </article>
    );
  }
}
export default DoneComponent;