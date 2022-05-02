function Myapp() {
  const [name1, setName] = React.useState(["test", "sample"]);
  function upadtestate() {
    setName("haiiiii");
  }
  return (
    <div>
      <h1>{name1}</h1>
      <button onClick={upadtestate}> click me</button>
    </div>
  );
}

ReactDOM.render(<Myapp />, document.getElementById("root"));
