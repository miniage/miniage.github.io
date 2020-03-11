class OS extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={update}>Update MiniageOS</button>
        <p>Welcome to MiniageOS</p>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<OS/>, document.getElementById("root"));
