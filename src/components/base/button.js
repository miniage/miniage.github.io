import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.text = new text();
    this.rect = new rect();
    this.state = {
      width: 200,
    }
  }
  render() {
    return (
      <React.Fragment>
        <defs>
          <linearGradient id="ubuntu-button-style1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: "#ffffff", stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: "#f3f1f1", stopOpacity: 1}} />
          </linearGradient>
        </defs>
        <g>
          <this.rect x="0" y="0" height="40" width={this.state.width} rx="7" stroke="#737373" fill="url(#ubuntu-button-style1)" onClick={this.props.onClick}/>
          <this.text x={this.state.width/2} y="20" fill="#4c4c4c" fontSize="25" fontFamily="Ubuntu" dominantBaseline="middle" textAnchor="middle" onClick={this.props.onClick}>{this.props.children}</this.text>
        </g>
      </React.Fragment>
    );
  }
  componentDidMount() {
    this.setState(
      width: this.text.width + 10,
    );
  }
}

export default Button;
