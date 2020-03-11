class OS extends Component {
  render() {
    return (
      <button onClick={Updater.update}>Update MiniageOS</button>
    );
  }
}

ReactDOM.render(<OS/>, document.getElementById("root"));
