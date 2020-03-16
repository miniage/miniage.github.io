import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <React.Fragment>
        <defs>
          <linearGradient id="ubuntu-button-style1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#f3f1f1;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect x="120" height="40" width="200" rx="7" stroke="#737373" fill="url(#ubuntu-button-style1)" onClick={this.props.onClick}>{this.props.children}</rect>
      </React.Fragment>
    );
  }
}

export default Button;
