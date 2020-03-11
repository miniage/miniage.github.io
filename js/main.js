class OS extends React.Component {
  render() {
    return (
      <svg width="100%" height="100%">
        <button onClick={update}>Update MiniageOS</button>
        <p>Welcome to MiniageOS</p>
        <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
      </svg>
    );
  }
}

ReactDOM.render(<OS/>, document.getElementById("root"));
