import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as Updater from "/js/caching/update.js";

class OS extends Component {
  render() {
    return (
      <button onClick={Updater.update}>Update MiniageOS</button>
    );
  }
}

ReactDOM.render(<OS/>, document.getElementById("root"));
