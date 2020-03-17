import React, { Component } from "react";

const cursorStyle = {
  cursor: "pointer",
  WebkitTouchCallout: "none",
  WebkitUserselect: "none",
  KhtmlUserSelect: "none",
  MozUserSelect: "none",
  msUserSelect: "none",
  userSelect: "none", 
}

class Button extends Component {
  constructor(props) {
    super(props);
    this.text = React.createRef();
    this.state = {
      width: 200,
    }
    this.x = isNaN(Number(this.props.x)) ? 0 : Number(this.props.x)
    this.y = isNaN(Number(this.props.y)) ? 0 : Number(this.props.y)
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
          <rect style={cursorStyle} x={this.x} y={this.y} height="40" width={this.state.width} rx="7" stroke="#737373" fill="url(#ubuntu-button-style1)" onClick={this.props.onClick}/>
          <text ref={this.text} style={cursorStyle} x={this.x + this.state.width/2} y={this.y + 20} fill="#4c4c4c" fontSize="25" fontFamily="Ubuntu" dominantBaseline="middle" textAnchor="middle" onClick={this.props.onClick}>{this.props.children}</text>
        </g>
      </React.Fragment>
    );
  }
  componentDidMount() {
    this.setState({
      width: this.text.current.getBBox().width + 10,
    });
  }
}

export default Button;
