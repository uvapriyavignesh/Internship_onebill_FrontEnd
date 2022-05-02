class Parent extends React.Component {
  sample() {
    console.log(this);
  }
  render() {
    return (
      <div>
        <h1>in parent</h1>
        {console.log(this)}
        <Child inherit={this.name} fun={this.sample} />
      </div>
    );
  }
}
function Child(probs) {
  return (
    <div>
      <h1> I am Child</h1>
      <h1>{probs.inherit}</h1>
      <button
        onClick={() => {
          probs.fun();
        }}
      >
        click
      </button>
    </div>
  );
}

ReactDOM.render(<Parent name="parent test" />, document.getElementById("root"));
