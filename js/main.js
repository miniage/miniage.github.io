class OS extends React.Component {
  render() {
    return (
      <button onClick={update}>Update MiniageOS</button>
    );
  }
}

ReactDOM.render(<OS/>, document.getElementById("root"));
