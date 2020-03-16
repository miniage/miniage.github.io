import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <React.Fragment>
        <defs>
          <linearGradient id="ubuntu-button-style1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: "#ffffff", stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: "#f3f1f1", stopOpacity: 1}} />
          </linearGradient>
        </defs>
        <rect x="120" height="40" width="200" rx="7" stroke="#737373" fill="url(#ubuntu-button-style1)" onClick={this.props.onClick}>
            <text fill="#4c4c4c" font-size="12" font-family="Ubuntu" x="150" y="86">{this.props.children}</text>
        </rect>
      </React.Fragment>
    );
  }
}

export default Button;
