import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as Updater from "/src/js/caching/update.js";

class OS extends Component {
  render() {
    return (
      <svg width="100%" height="100%">
        <button onClick={Updater.update}>Update MiniageOS</button>
        <p>Welcome to MiniageOS</p>
        <circle cx="50" cy="50" r="40" stroke="green" strokeWidth="4" fill="yellow" />
      </svg>
    );
  }
}

ReactDOM.render(<OS/>, document.getElementById("root"));
