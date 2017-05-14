import React, { Component } from "react";
import Paper from "material-ui/Paper";
import { Card, CardTitle, CardText, CardActions } from "material-ui/Card";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

class ShellComponent extends Component {
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
            height: 400,
            width: 300,
            margin: 20,
            textAlign: "center",
            display: "inline-block"
          }}
          zDepth={5}
        >
          <Card
            style={{
              height: "100%"
            }}
          >
            <CardTitle title="Check-In" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardActions>
              <FloatingActionButton>
                <ContentAdd />
              </FloatingActionButton>
            </CardActions>
          </Card>
        </Paper>
        <Paper
          style={{
            height: 400,
            width: 300,
            margin: 20,
            textAlign: "center",
            display: "inline-block"
          }}
          zDepth={5}
        >
          Jaiden is awesome!
        </Paper>
      </article>
    );
  }
}
export default ShellComponent;
