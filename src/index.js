import React, { Component } from "react";
import ReactDOM from "react-dom";
import Update from "./caching/update.js";
import Button from "./components/base/button.js";

class OS extends Component {
  render() {
    return (
      <svg width="100%" height="100%">
        <Button onClick={Update}>Update MiniageOS</Button>
        <circle cx="50" cy="50" r="40" stroke="green" strokeWidth="4" fill="yellow" />
      </svg>
    );
  }
}

ReactDOM.render(<OS/>, document.getElementById("root"));
