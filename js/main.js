import React, { Component } from "react";
import ReactDOM from "react-dom";

class OS extends Component {
  render() {
    return (
      <button onClick={update}>Update MiniageOS</button>
    );
  }
}

ReactDOM.render(document.getElementById("root"), <OS/>);
