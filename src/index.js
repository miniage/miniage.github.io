import React, { Component } from "react";
import ReactDOM from "react-dom";
import Update from "./caching/update.js";
import Button from "./components/base/button.js";

class OS extends Component {
  render() {
    return (
      <svg width="100%" height="100%">
        <Button onClick={Update}>Update MiniageOS</Button>
      </svg>
    );
  }
}

ReactDOM.render(<OS/>, document.getElementById("root"));
