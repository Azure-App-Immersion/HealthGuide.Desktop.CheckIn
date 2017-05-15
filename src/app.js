import React, { Component } from "react";
import ReactDOM from "react-dom";
import Loading from "react-loading";
import ShellComponent from "./components/shell.component";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import AppBar from "material-ui/AppBar";

class AppComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      isLoading: false
    };
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <main>
          <AppBar title="Check-In Kiosk" iconClassNameLeft="healthguide-logo-white" />
          <ShellComponent />
        </main>
      </MuiThemeProvider>
    );
  }
}

const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
var main = document.getElementById("root");
ReactDOM.render(<AppComponent />, main);
